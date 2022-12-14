import React from 'react';
import Stars from './Stars.jsx';
import styled, { css } from 'styled-components';
import BreakdownBarChart from './charts/BreakdownBarChart.jsx';
import BreakdownArrowChart from './charts/BreakdownArrowChart.jsx';

const Formatting = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
  width: 350px;
  margin-right: 100px;
  display: flex-column;
`;
const LargeRating = styled.div`
  font-size: 70px;
  font-weight: bold;
`
const PercentRecc = styled.div`
  padding-bottom: 1em;
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
    <LargeRating>{rating.toLocaleString(undefined, { maximumFractionDigits: 1, minimumFractionDigits: 1 })}<Stars rating={rating}/></LargeRating>
    <PercentRecc>{recommendOrNah(reviews)}% of reviews recommended this product</PercentRecc>
    <BreakdownArrowChart metaData={metaData.characteristics}/>
    <BreakdownBarChart />
  </Formatting>
)};

export default Ratings;
