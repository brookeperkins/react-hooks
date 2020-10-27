import fetch from 'node-fetch';
const APOD_API_KEY = process.env.REACT_APP_APOD_API_KEY;
/* eslint-disable max-len */

export const fetchApod = () => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}&count=2`)
    .then(response => response.json())
    .then(json => json.entries.map(entries => ({
      date: entries.date,
      explanation: entries.explanation,
      title: entries.title,
      url: entries.url
    })));
};

export const fetchEntry = (date) => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}&date=${date}`)
    .then(res => res.json())
    .then(json => json[0]);
};
