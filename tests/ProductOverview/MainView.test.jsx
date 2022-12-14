import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MainView from '../../Client/src/components/ProductDetails/MainView.jsx';
import { dummyStyles, dummyDefaultStyle, dummyProductData, dummyRating, dummyReviewMeta } from './DummyData.js'

describe('MainView Container', () => {
  it('should render the mainview for product overview', () => {
    render(
    <MainView
      product={37318}
      productData={dummyProductData}
      reviewMeta={dummyReviewMeta}
      rating={dummyRating}
    />
    )
    expect(screen.getByTestId('carousel')).toBeTruthy()
  })

  it('should console log when clicked' , async () => {
    render(
      <MainView
        product={37318}
        productData={dummyProductData}
        reviewMeta={dummyReviewMeta}
        rating={dummyRating}
      />
    )
    const consoleSpy = jest.spyOn(console, 'log');

    await userEvent.click(screen.getByTestId('test_mainview'));

    expect(consoleSpy).toHaveBeenCalledWith('This element was clicked');

  })
})