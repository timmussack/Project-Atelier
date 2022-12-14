import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

  it('should allow user to change size', async () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);
    await userEvent.selectOptions(
       screen.getAllByRole('combobox')[0],
       screen.getAllByTestId('optiontest')[3],
    )
    // await waitFor(() => screen.getByRole('alert'))
    expect(await screen.getAllByTestId('optiontest')[3].selected).toBe(true)
  });

  it('should conditionally render an error message upon add to cart without options', async () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);
    await userEvent.click(screen.getByTestId('atcbutton'))
    expect(screen.getByTestId('errortest')).toHaveTextContent('Please select size')
  });

  it('should add to cart succesfully', async () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);
    const consoleSpy = jest.spyOn(console, 'log');
    await userEvent.selectOptions(
      screen.getAllByRole('combobox')[0],
      screen.getAllByTestId('optiontest')[3],
   )
   await userEvent.click(screen.getByTestId('atcbutton'))

   expect(consoleSpy).toHaveBeenCalledWith('Add to cart triggered')
  })

  it('should select quantity after selecting size', async () => {
    render(<Dropdown currentStyle={dummyDefaultStyle}/>);
    await userEvent.selectOptions(
      screen.getAllByRole('combobox')[0],
      screen.getAllByTestId('optiontest')[2],
   )
   await userEvent.selectOptions(
    screen.getAllByRole('combobox')[1],
    screen.getByRole('option', {name: '2'}),
    )
    
  expect(screen.getByRole('option', {name: '2' }).selected).toBe(true);

  })


})