import React, { useState } from 'react';
import Stars from './Stars.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import AddReview from './AddReview.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx';

export default function ReviewTiles({reviews, filter, metaData, rating, product, productData}) {
  const [display, setDisplay] = useState(2);

  const addMoreReviewsToDisplay = () => {
    setDisplay(display+2);
  };

  return (
    <>
      <div>
        {reviews.map((review, index) => {
          if (index < display) {
            return <ReviewEntry review={review} key={index}/>
          } else {
            return
          }
        })}
      </div>
      <AddReview display={display} reviews={reviews} metaData={metaData} rating={rating} displayHandler={addMoreReviewsToDisplay} product={product} productData={productData}/>
    </>
  )};
