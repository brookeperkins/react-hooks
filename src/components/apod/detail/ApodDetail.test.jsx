import React from 'react';
import { render } from '@testing-library/react';
import ApodDetail from './ApodDetail';

describe('ApodDetail component', () => {
  it('renders the ApodDetail component', () => {
    const { asFragment } = render(<ApodDetail 
      title="Messier 76"
      date="1990-01-01"
      url="https://apod.nasa.gov/apod/image/0611/Messier76_seip_smallcc.jpg"
      explanation="Nebula at the right foot of Andromeda..."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
