import React from 'react';
import PropTypes from 'prop-types';

const ApodItem = ({ title, url }) => (
  <figure>
    <h1>{title}</h1>
    <img src={url} alt={title} />
  </figure>
);

ApodItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ApodItem;
