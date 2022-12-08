import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import ReviewTiles from './ReviewTiles.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx'
import axios from 'axios';

const Formatting = styled.div`
  margin: 10px 20px;
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
`;

const Reviews = ({reviews, metaData, product, productData, setReviews}) => {

  const optionHandler = (e) => {
    console.log('asdsa')
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