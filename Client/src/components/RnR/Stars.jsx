import React from 'react';
import StarRatings from 'react-star-ratings';

const Stars = ({rating}) => {

  return (
    <StarRatings
      rating={rating}
      numOfStars={5}
      starRatedColor={'rgb(0, 205, 60)'}
      starDimension={'30px'}
      starSpacing={'4px'}
    />
  )
};

export default Stars
