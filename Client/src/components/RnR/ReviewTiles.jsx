import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AddReview from './AddReview.jsx';

const ReviewTiles = ({reviews, filter, metaData, rating}) => {
  const [display, setDisplay] = useState(2);

  const sortHandler = (option, reviews) => {
    if (option === 'Relevant') {
      return reviews.sort((a, b) => { b.date - a.date });
    } else if (option === 'Helpful') {
      return reviews.sort((a, b) => { b.helpfulness - a.helpfulness });
    } else {
      return reviews.sort((a, b) => { a.date - b.date });
    }
  };

  const addMoreReviewsToDisplay = () => {
    setDisplay(display+2);
  };

  return (
    <div>
      <div>
        {reviews.map((review, index) => {
          if (index < display) {
            return <ReviewEntry review={review} key={index}/>
          } else {
            return;
          }
        })};
      </div>
      <AddReview display={display} reviews={reviews} metaData={metaData} rating={rating} displayHandler={addMoreReviewsToDisplay}/>
    </div>
  )};

export default ReviewTiles;
