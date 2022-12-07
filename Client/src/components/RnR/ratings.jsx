import React from 'react';
import Stars from './Stars.jsx';
import styled, { css } from 'styled-components';

const Formatting = styled.div`
  margin: 10px 20px;
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
`;
const LargeRating = styled.div`
  font-size: 60px;
  font-weight: bold;
`
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
  <Formatting>
    <div><LargeRating>{rating} <Stars rating={rating}/> </LargeRating> </div>
    <div>{recommendOrNah(reviews)}% of reviews recommended this item</div>
  </Formatting>
)};

export default Ratings;
