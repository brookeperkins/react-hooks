import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ApodList from './ApodList';
/* eslint-disable max-len */

const testArray = [
  { title: 'The Cygnus Loop', url: 'https://apod.nasa.gov/apod/image/CygnusLoop_hst.gif' },
  { title: 'The Crown of the Sun"', url: 'https://apod.nasa.gov/apod/image/0808/TSE2008_luethen800.jpg' } 
];

describe('ApodList component', () => {
  afterEach(() => cleanup());
  it('renders the ApodList component', () => {
    const { asFragment } = render(<ApodList
      entries={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
