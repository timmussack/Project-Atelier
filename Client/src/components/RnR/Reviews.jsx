import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import ReviewTiles from './ReviewTiles.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx'
import axios from 'axios';

const Formatting = styled.div`
  width:100%
`;

const Reviews = ({reviews, metaData, product, productData, setReviews}) => {

  const optionHandler = (e) => {
    axios.get('/reviews', {
      params: {
        product_id: product,
        count: 100,
        sort: e.target.value,
      }
    })
      .then(response => {
        console.log(response.data.results)
        setReviews(response.data.results);
      })
      .catch(err => err);
  };

  return (
  <Formatting>
    <ReviewSortOptions optionHandler={optionHandler} reviews={reviews} />
    <ReviewTiles reviews={reviews} metaData={metaData} product={product} productData={productData}/>
  </Formatting>
)};

export default Reviews;
