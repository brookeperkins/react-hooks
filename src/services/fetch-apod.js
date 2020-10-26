const APOD_API_KEY = process.env.REACT_APP_APOD_API_KEY;

export const fetchApod = () => {
  // eslint-disable-next-line max-len
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}&count=2`)
    .then(response => response.json())
    .then(json => json.entries.map(entries => ({
      explanation: entries.explanation,
      title: entries.title,
      url: entries.url
    })));
};
