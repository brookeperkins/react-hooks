import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

const ApodDetail = ({ title, date, url, explanation }) => (
  <section data-testid="apod-detail">
    <h1>{title}</h1>
    <h2>{date}</h2>
    <img src={url} alt={title} width="400" />
    <h3>About: {explanation}</h3>
  </section>
);

ApodDetail.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired
};

export default ApodDetail; 
