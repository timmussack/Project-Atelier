import React from 'react';
import Stars from './Stars.jsx';
import styled, { css } from 'styled-components';
import BreakdownBarChart from './charts/BreakdownBarChart.jsx';
import BreakdownArrowChart from './charts/BreakdownArrowChart.jsx';

const Formatting = styled.div`
  font-size: 14px;
  width: 430px;
  margin-right: 100px;
`;
const LargeRating = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
  font-size: 70px;
  font-weight: bold;
  height: 10%;
`
const RatingAndStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PercentRecc = styled.div`
  padding-bottom: 1em;
`
const Ratings = ({ rating, reviews, metaData, setReviews, product }) => {
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
    <RatingAndStars>
      <LargeRating>{rating.toLocaleString(undefined, { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</LargeRating>
      <Stars rating={rating}/>
    </RatingAndStars>
    <PercentRecc>{recommendOrNah(reviews)}% of reviews recommended this product</PercentRecc>
    <hr/>
    RATING BREAKDOWN
    <br/>
    <BreakdownBarChart metaData={metaData.ratings} reviews={reviews} setReviews={setReviews} product={product}/>
    <br/>
    PRODUCT BREAKDOWN
    <BreakdownArrowChart metaData={metaData.characteristics}/>
  </Formatting>
)};

export default Ratings;
