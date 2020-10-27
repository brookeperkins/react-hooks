import React, { useState, useEffect } from 'react';
import ApodList from '../../components/apod/list/ApodList';
import { fetchApod } from '../../services/fetch-apod';

const ApodEntries = () => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchApod()
      .then(entries => setEntries(entries))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <div>
    <p>Loading</p>
    <img data-testid="loading" 
      src="https://i.imgur.com/oRnhau2.gif" />
  </div>;

  return (
    <ApodList entries={entries} />
  );
};

export default ApodEntries;
