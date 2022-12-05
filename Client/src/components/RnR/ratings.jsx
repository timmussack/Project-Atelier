import React from 'react';
import Stars from './Stars.jsx';

const Ratings = ({ rating, reviews, metaData }) => {
  const recommendOrNah = (reviewData) => {
    let recommended = 0;

    reviewData.forEach((review) => {
      if (review.recommend === true) {
        recommended++;
      }
    })
    let percentage = Math.round((recommended/reviews.length) * 100);
    return percentage;
  }

  return (
  <div>
    <h1> Rating Breakdown: </h1>
    <p>{rating}</p>
    <Stars rating={rating} />
    <div>{recommendOrNah(reviews)}% of reviews recommended this item</div>
  </div>
)};

export default Ratings;
