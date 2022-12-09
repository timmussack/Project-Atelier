import React from 'react';
import StarRatings from 'react-star-ratings';

const Stars = ({rating}) => {

  return (
    <StarRatings
      rating={rating}
      numOfStars={5}
      starRatedColor={'rgb(54, 54, 54)'}
      starDimension={'15px'}
      starSpacing={'4px'}
    />
  )
};

export default Stars
