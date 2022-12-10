import styled, { css } from 'styled-components';
import React from 'react';
import Stars from './Stars.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';

const Formatting = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
  padding-bottom: 1em;
`;

const TitleMain = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 1em;
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

      <TitleMain>{review.summary.slice(0, 60)}</TitleMain>

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
      <hr style={{marginTop: "2em", border: "1px solid", borderColor: "rgb(54, 54, 54)"}}></hr>
    </Formatting>
  )
}

export default ReviewEntry;
