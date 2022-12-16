import React from 'react';
import Stars from './Stars.jsx';
import BreakdownBarChart from './charts/BreakdownBarChart.jsx';
import BreakdownArrowChart from './charts/BreakdownArrowChart.jsx';
import { RatingsFormatting, LargeRating, RatingAndStars, PercentRecc } from './RnRStyling';

export default function Ratings({ rating, reviews, metaData, setReviews, product }) {

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
    <RatingsFormatting>
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
    </RatingsFormatting>
  )
}
