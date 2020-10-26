import React from 'react';
import { render } from '@testing-library/react';
import ApodList from './ApodList';

describe('ApodList component', () => {
  it('renders the ApodList component', () => {
    const { asFragment } = render(<ApodList 
      title="Messier 76"
      url="https://apod.nasa.gov/apod/image/0611/Messier76_seip_smallcc.jpg"
      explanation="Nebula at the right foot of Andromeda..."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
