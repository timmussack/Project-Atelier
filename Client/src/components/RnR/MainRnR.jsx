import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const MainRnR = ({ rating, reviews, productID, metaData }) => {

  return (
  <>
    <div>
      <Ratings rating={rating} reviews={reviews} metaData={metaData}/>
    </div>

    <div>
      <Reviews reviews={reviews} rating={rating} metaData={metaData}/>
    </div>
  </>
)};

export default MainRnR;
