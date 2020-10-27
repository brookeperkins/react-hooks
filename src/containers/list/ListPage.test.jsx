import React from 'react';
import { render, screen } from '@testing-library/react';
import { fetchApod } from '../../services/fetch-apod';
import ListPage from './ListPage';

jest.mock('../../services/fetch-apod');

describe('ListPage container', () => {
  it('renders the ListPage container', async() => {
    fetchApod.mockResolvedValue([
      {
        title: 'Sprite Fireworks',
        url: 'https://apod.nasa.gov/apod/image/9906/sprites_exl98_big.jpg',
      }
    ]);

    render(<ListPage />);

    const apodItems = await screen.findByTestId('apod-items');

    expect(apodItems).not.toBeEmptyDOMElement();
  });
});
