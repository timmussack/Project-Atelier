import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NewReviewModal from './modals/NewReviewModal.jsx'

const MoreReviews = styled.button`
  font-family: Jost;
  background-color: white;
  color: black;
  margin: 0px 10px 60px 0px;
  height: 50px;
  width: 150px;
  border: 2px solid;
  border-color: #253954;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  border-radius: 10px;
`;

const AddReviewButton = styled.button`
  font-family: Jost;
  background-color: white;
  color: black;
  height: 50px;
  width: 150px;
  border: 2px solid;
  border-color: #253954;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  border-radius: 10px;
`;

const AddReview = ({ display, reviews, metaData, rating, displayHandler, product, productData }) => {
  const [showAddReview, setShowAddReview] = useState(false);

  return (
    <div>
      {reviews.length > display ? (
        <div>
          <MoreReviews onClick={() => displayHandler()}>MORE REVIEWS</MoreReviews>
          <AddReviewButton onClick={() => setShowAddReview(!showAddReview)}>ADD A REVIEW +</AddReviewButton>
          <NewReviewModal metaData={metaData} showAddReview={showAddReview} setShowAddReview={setShowAddReview} product={product} productData={productData}/>
        </div>
      ) : (
        <div>
          <AddReviewButton onClick={() => setShowAddReview(!showAddReview)}>ADD A REVIEW +</AddReviewButton>
          <NewReviewModal metaData={metaData} showAddReview={showAddReview} setShowAddReview={setShowAddReview} product={product} productData={productData}/>
        </div>
      ) }
    </div>
  )
};

export default AddReview;
