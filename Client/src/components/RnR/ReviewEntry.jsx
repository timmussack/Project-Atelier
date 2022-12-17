import React from 'react';
import Stars from './Stars.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import { EntryFormatting, EntryTitleMain } from './RnRStyling';

export default function ReviewEntry({review, rating}) {

  const formatDate = (data) => {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    return month + ' ' + day + ', ' + year;
  }

  return (
    <EntryFormatting>
      <ReviewHeader summary={review.summary} rating={review.rating} user={review.reviewer_name} date={formatDate(review.date)}/>

      <EntryTitleMain>{review.summary.slice(0, 60)}</EntryTitleMain>

      <ReviewBody body={review.body} summary={review.summary.slice(0, 60)}/>

      <div>
        {review.recommend ? ('✔ I recommend this product') : (null) }
      </div>

      <br></br>

      <div>
        <ReviewPhotos photos={review.photos}/>
      </div>

      <div>
        {review.response ? (`Response from seller:${review.response}`) : (null)}
      </div>

      <ReviewFooter helpfulness={review.helpfulness} reviewID={review.review_id}/>
    </EntryFormatting>
  )
}
