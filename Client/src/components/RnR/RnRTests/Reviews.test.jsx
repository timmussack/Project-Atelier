import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Reviews from '../Reviews.jsx';

describe ('RNR Reviews Component', () => {
    const user = userEvent.setup();

    it('should render Review Tiles component', () => {
        render(<ReviewTiles />);
    })

    it('should render dropdown menu for sort options', () => {
        render(<ReviewSortOptions />);
    })
})