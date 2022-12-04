import React from 'react';
import StarRatings from 'react-star-ratings';

const Stars = ({rating}) => {

  return (
    <StarRatings
      rating={rating}
      numOfStars={5}
      starRatedColor={'rgb(255, 205, 60)'}
      starWidthAndHeight="15px"
    />
  )
};

export default Stars
