import React from 'react';
import PropTypes from 'prop-types';

const ApodList = ({ title, url, explanation }) => (
  <figure>
    <h1>{title}</h1>
    <h3>{url}</h3>
    <h3>About: {explanation}</h3>
  </figure>
);

ApodList.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired
};

export default ApodList; 
