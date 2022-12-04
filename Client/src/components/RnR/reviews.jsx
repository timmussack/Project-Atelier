import React, { useState } from 'react';
import ReviewTiles from './ReviewTiles.jsx';

const Reviews = ({reviews}) => {

  return (
  <>
    <h1> Reviews </h1>
    <ReviewTiles reviews={reviews}/>
  </>
)};

export default Reviews;
