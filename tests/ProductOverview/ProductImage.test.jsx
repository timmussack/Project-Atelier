import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductImage from '../../Client/src/components/ProductDetails/ProductImage.jsx';
import userEvent from '@testing-library/user-event'
import { dummyStyles, dummyDefaultStyle, dummyProductData, dummyRating, dummyReviewMeta } from './DummyData.js'

describe('Carousel renders 7 images & exists', () => {
  it('should render the carousel', () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );

    expect(screen.getAllByTestId('carousel')).toBeTruthy()
  })

  it('should render correct number of thumbnails', () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );

    expect(screen.getAllByTestId('thumbnails')).toHaveLength(7)
  });

  it('should display new image when right arrow is clicked', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    await userEvent.click(screen.getByTestId('right-arrow_test'));
    expect(screen.getByAltText('default image').src).toBe(dummyDefaultStyle.photos[1].url)

  })

  it('should move image back on left arrow click', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    await userEvent.click(screen.getByTestId('right-arrow_test'));
    expect(screen.getByAltText('default image').src).toBe(dummyDefaultStyle.photos[1].url)

    await userEvent.click(screen.getByTestId('left-arrow_test'));
    expect(screen.getByAltText('default image').src).toBe(dummyDefaultStyle.photos[0].url)
  });

  it('should move carousel down', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    await userEvent.click(screen.getByTestId('thumbnaildown'));
    expect(screen.getByAltText('default image').src).not.toBe(dummyDefaultStyle.photos[0].url)
  });

  it('should hide bottom carousel arrow on final image', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    for (let i = 0; i < dummyDefaultStyle.photos.length - 1; i++) {
      await userEvent.click(screen.getByTestId('thumbnaildown'));
    }
    expect(screen.queryByTestId('thumbnaildown')).toBeFalsy()
  });

  it('should hide product data on click', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    await userEvent.click(screen.getByAltText('default image'));
    expect(getComputedStyle(screen.getByTestId('left3test'))._values.visibility).toBe('hidden')
  });

  it('should show product data on double click', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    await userEvent.click(screen.getByAltText('default image'));
    await userEvent.click(screen.getByAltText('default image'));
    expect(getComputedStyle(screen.getByTestId('left3test'))._values.visibility).toBe('visible')
  });

  it('should change styles on click', async () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );
    await userEvent.click(screen.getAllByTestId('styleselection')[1]);
    var test = screen.getByAltText('default image').src
    expect(test).toBe(dummyStyles[1].photos[0].url)
  })
});