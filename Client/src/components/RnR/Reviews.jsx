import React, { useState } from 'react';
import axios from 'axios';
import ReviewTiles from './ReviewTiles.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx'
import { ReviewsFormatting } from './RnRStyling';

export default function Reviews({reviews, metaData, product, productData, setReviews}) {

  const optionHandler = (e) => {
    axios.get('/reviews', {
      params: {
        product_id: product,
        count: 100,
        sort: e.target.value,
      }
    })
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(err => err);
  };

  return (
  <ReviewsFormatting>
    <ReviewSortOptions optionHandler={optionHandler} reviews={reviews} />
    <ReviewTiles reviews={reviews} metaData={metaData} product={product} productData={productData}/>
  </ReviewsFormatting>
)};

