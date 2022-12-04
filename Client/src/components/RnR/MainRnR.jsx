import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const MainRnR = ({ rating, reviews, productID }) => {

  return (
  <>
    <h1> Ratings & Reviews </h1>

    <div>
      <Ratings rating={rating} reviews={reviews} />
    </div>

    <div>
      <Reviews reviews={reviews} rating={rating} />
    </div>
  </>
)};

export default MainRnR;
