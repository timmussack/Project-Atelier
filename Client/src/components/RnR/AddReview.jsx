import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NewReviewModal from './modals/NewReviewModal.jsx'

const MoreReviews = styled.button`
  background-color: #253954;
  color: white;
  margin: 0px 10px 60px 0px;
  height: 50px;
  width: 150px;
  border: 1px solid;
  cursor: pointer;
  font-weight: bold;
`;

const AddReviewButton = styled.button`
  background-color: #253954;
  color: white;
  height: 50px;
  border: 1px solid;
  width: 150px;
  cursor: pointer;
  font-weight: bold;
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
