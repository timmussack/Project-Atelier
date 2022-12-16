import React, { useState, useEffect } from 'react';
import NewReviewModal from './modals/NewReviewModal.jsx'
import { MoreReviews, AddReviewButton } from './RnRStyling';

export default function AddReview({ display, reviews, metaData, rating, displayHandler, product, productData }) {
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
