import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApodDetail from '../../components/apod/detail/ApodDetail';
import { fetchEntry } from '../../services/fetch-apod';

const DetailPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState({ 
    date: '', 
    title: '', 
    url: '', 
    explanation: ''
  });

  const apodEntry = match.params.apodEntry;

  useEffect(() => {
    fetchEntry(apodEntry)
      .then(fetchedEntry => setEntry(fetchedEntry[0]))
      .finally(() => setLoading(false));
  }, [apodEntry]);

  if(loading) return <div>
    <p>Loading</p>
    <img data-testid="loading" 
      src="https://i.imgur.com/oRnhau2.gif" />
  </div>;

  return (
    <ApodDetail {...entry} />
  );
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      apodEntry: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};


export default DetailPage;
