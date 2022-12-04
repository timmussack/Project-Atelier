import React from 'react';
import Stars from './Stars.jsx';

const Ratings = ({ rating, stars }) => {

  return (
  <div>
    <p>{rating}</p>
    <Stars rating={rating} stars={stars} />
  </div>
)};

export default Ratings;
