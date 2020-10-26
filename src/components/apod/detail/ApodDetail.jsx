import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

const ApodDetail = ({ title, url, explanation }) => (
  <figure>
    <h1>{title}</h1>
    <img src={url} alt={title} width="400" />
    <h3>About: {explanation}</h3>
  </figure>
);

ApodDetail.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired
};

export default ApodDetail; 
