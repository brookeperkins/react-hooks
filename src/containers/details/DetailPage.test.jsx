import React from 'react';
import { fetchEntry } from '../../services/fetch-apod';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';
/* eslint-disable max-len */

jest.mock('../../services/fetch-apod');

describe('DetailPage container', () => {
  it('renders the DetailPage container', async() => {
    fetchEntry.mockResolvedValue([
      {
        title: 'Betelgeuse Imagined"',
        date: '1990-01-01',
        url: 'https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_960.jpg',
        explanation: 'Betelgeuse, one of the brightest and most recognized stars in the night sky, is only half as bright as it used to be only five months ago.'
      }
    ]);

    render(<DetailPage match={{ params: 1 }} />);

    const apodDetail = await screen.findByTestId('apod-detail');

    expect(apodDetail).not.toBeEmptyDOMElement();
  });
});
