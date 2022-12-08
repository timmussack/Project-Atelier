import styled, { css } from 'styled-components';
import React from 'react';
import Stars from './Stars.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';

const TitleMain = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Formatting = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
`;


const ReviewEntry = ({review, rating}) => {

  const formatDate = (data) => {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    return month + ' ' + day + ', ' + year;
  }

  return (
    <Formatting>
      <ReviewHeader summary={review.summary} rating={review.rating} user={review.reviewer_name} date={formatDate(review.date)}/>

      <TitleMain> {review.summary.slice(0, 60)} </TitleMain>

      <ReviewBody body={review.body}/>

      <div>
        {review.recommend ? ('✓ I recommend this product') : (null) }
      </div>

      <div>
        <ReviewPhotos photos={review.photos}/>
      </div>

      <div>
        {review.response ? (`Response from seller:${review.response}`) : (null)}
      </div>

      <p>{review.helpfulness} users found this review helpful</p>

      <ReviewFooter helpfulness={review.helpfulness}/>
    </Formatting>
  )
};

export default ReviewEntry;
