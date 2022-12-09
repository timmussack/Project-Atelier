import React from 'react';
import Stars from './Stars.jsx';
import styled, { css } from 'styled-components';
import BreakDownBarChart from './charts/BreakDownBarChart.jsx';
import BreakDownArrowChart from './charts/BreakDownArrowChart.jsx';

const Formatting = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
  width: 350px;
  margin-right: 100px;
`;
const LargeRating = styled.div`
  font-size: 60px;
  font-weight: bold;
`
const PercentRecc = styled.div`
  padding-bottom: 1em;
`
const Ratings = ({ rating, reviews, metaData }) => {
  const recommendOrNah = (reviewData) => {
    console.log(metaData)
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
    <LargeRating>{rating}<Stars rating={rating}/></LargeRating>
    <PercentRecc>{recommendOrNah(reviews)}% of reviews recommended this product</PercentRecc>
    <BreakDownArrowChart metaData={metaData.characteristics}/>
  </Formatting>
)};

export default Ratings;
