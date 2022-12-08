import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NewReviewModal from './modals/NewReviewModal.jsx'

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

const AddReview = ({ display, reviews, metaData, rating, displayHandler, product, productData }) => {
  const [showAddReview, setShowAddReview] = useState(false);

  return (
    <div>
      {reviews.length > display ? (
        <div>
          <MoreReviews onClick={() => displayHandler()}>MORE REVIEWS</MoreReviews>
          <AddReviewButton onClick={() => setShowAddReview(!showAddReview)}>ADD A REVIEW +</AddReviewButton>
          <NewReviewModal showAddReview={showAddReview} setShowAddReview={setShowAddReview} product={product} productData={productData}/>
        </div>
      ) : (
        <div>
          <AddReviewButton onClick={() => setShowAddReview(!showAddReview)}>ADD A REVIEW +</AddReviewButton>
          <NewReviewModal showAddReview={showAddReview} setShowAddReview={setShowAddReview} product={product} productData={productData}/>
        </div>
      ) }
    </div>
  )
};

export default AddReview;
