import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import Dropdown from '../../Client/src/components/ProductDetails/Dropdown.jsx';
import { dummyStyles, dummyDefaultStyle, dummyProductData, dummyRating, dummyReviewMeta } from './DummyData.js'


describe('Dropdown container', () => {
  it('should render the Dropdown component', () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);
    expect(screen.getByTestId('dropdowntest')).toBeTruthy()
  });

  it('should render the correct amount of sizes', () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);
    expect(screen.getAllByTestId('optiontest')).toHaveLength(12)
  });

  it('should correctly set default options', () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);

    expect(screen.getByRole('option', {name: 'Select Size'}).selected).toBe(true);
    expect(screen.getByRole('option', {name: '-'}).selected).toBe(true)
  });


})