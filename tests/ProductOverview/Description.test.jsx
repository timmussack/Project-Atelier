import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from '../../Client/src/components/ProductDetails/Description.jsx';
import { dummyProductData } from './DummyData.js'

describe('Description Block', () => {
  it('Should render the Description Container', () => {
    render (
      <Description
        productData={dummyProductData}
      />
    )
    expect(screen.getAllByTestId('description_container')).toBeTruthy();
  });

  it('Should render the slogan', () => {
    render (
      <Description
      productData={dummyProductData}
    />
    );
    expect(screen.getByTestId('slogan')).toHaveTextContent('jumpman')
  });

  it('Should render the description', () => {
    render (
      <Description
      productData={dummyProductData}
    />
    );
    expect(screen.getByTestId('description')).toHaveTextContent('asymmetrical lacing')
  })
})

