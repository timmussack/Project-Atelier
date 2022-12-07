import React from 'react';
import styled, { css } from 'styled-components';

const MoreReviews = styled.button`
  background: transparent;
  margin: 20px 10px 20px 20px;
  height: 40px;
  border: 1px solid;
  cursor: pointer;
`;

const AddReviewButton = styled.button`
  background: transparent;
  height: 40px;
  border: 1px solid;
  cursor: pointer;
`;

const AddReview = ({ display, reviews, metaData, rating, displayHandler }) => {

  const addHandler = () => {
    console.log('placeholder for add reviews')
  }
  return (
    <div>
      {reviews.length > display ? (
        <div className="reviewButtons">
          <MoreReviews onClick={() => displayHandler()}>MORE REVIEWS</MoreReviews>
          <AddReviewButton onClick={() => addHandler()}>ADD A REVIEW +</AddReviewButton>
        </div>
      ) : (
        <div className="reviewButtons">
          <AddReviewButton onClick={() => addHandler()}>ADD A REVIEW +</AddReviewButton>
        </div>
      ) }
    </div>
  )
};

export default AddReview;
