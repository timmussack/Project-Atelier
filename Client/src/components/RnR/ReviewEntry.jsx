import React from 'react';
import Stars from './Stars.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';

const ReviewEntry = ({review, rating}) => {

  return (
    <div>
      <ReviewHeader rating={review.rating} user={review.reviewer_name} date={review.date}/>

      <div>
        <p>
          {review.summary.slice(0, 60)}
        </p>
      </div>

      <ReviewBody body={review.body}/>

      <p>
        {review.recommend ? ('This user recommends this product') : (null) }
      </p>

      <div>
        <ReviewPhotos photos={review.photos}/>
      </div>

      <p>
        {review.response ? (`Response from seller:${review.response}`) : (null)}
      </p>
      <ReviewFooter helpfulness={review.helpfulness}/>
    </div>
  )
};

export default ReviewEntry;
