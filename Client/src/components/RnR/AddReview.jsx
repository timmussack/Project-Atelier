import React from 'react';

const AddReview = ({ display, reviews, metaData, rating, displayHandler }) => {

  const addHandler = () => {
    console.log('placeholder for add reviews')
  }
  return (
    <div>
      {reviews.length > display ? (
        <div className="reviewButtons">
          <button onClick={() => displayHandler()}>More Reviews</button>
          <button onClick={() => addHandler()}>Add Your Review</button>
        </div>
      ) : (
        <div className="reviewButtons">
          <button onClick={() => addHandler()}>Add Your Review</button>
        </div>
      ) }
    </div>
  )
};

export default AddReview;
