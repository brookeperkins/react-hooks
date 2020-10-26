import React from 'react';
import { render } from '@testing-library/react';
import ApodItem from './ApodItem';
/* eslint-disable max-len */

describe('ApodItem component', () => {
  it('renders ApodItem component', () => {
    const { asFragment } = render(<ApodItem 
      title="NGC 6369: The Little Ghost Nebula"
      url="https://apod.nasa.gov/apod/image/1710/NGC6369LittleGhostHST1024c.jpg"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
