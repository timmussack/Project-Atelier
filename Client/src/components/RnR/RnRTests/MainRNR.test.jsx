import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MainRnR from '../MainRnR.jsx';

describe('RNR Parent Component', () => {
    const user = userEvent.setup();

    it('should render at title', () => {
      render(<RNRContainer />)
      expect(screen.getByTestId('RNRTitle')).toHaveTextContent('RATINGS & REVIEWS');

    })
  })