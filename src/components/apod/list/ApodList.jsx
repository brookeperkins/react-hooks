import React from 'react';
import PropTypes from 'prop-types';
import ApodItem from './ApodItem';

const ApodList = ({ entries }) => {
  const entryElements = entries.map(entry => (
    <li key={`${entry.title}-${entry.url}`}>
      <a key={entry.title} href={`/${entry.date}`}>
        <ApodItem {...entry} />
      </a>
    </li>
  ));

  return (
    <ul data-testid="apod-items">
      {entryElements}
    </ul>
  );
};

ApodList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};

export default ApodList;
