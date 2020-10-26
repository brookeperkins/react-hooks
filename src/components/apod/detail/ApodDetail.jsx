import React from 'react';
import PropTypes from 'prop-types';

const ApodDetail = ({ title, url, explanation }) => (
  <figure>
    <h1>{title}</h1>
    <h3>{url}</h3>
    <h3>About: {explanation}</h3>
  </figure>
);

ApodDetail.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired
};

export default ApodDetail; 
