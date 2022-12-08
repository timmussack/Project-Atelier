import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import Stars from './Stars.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import AddReview from './AddReview.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx';

const TitleMain = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Formatting = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
`;

const ReviewTiles = ({reviews, filter, metaData, rating, product, productData}) => {
  const [display, setDisplay] = useState(2);

  const sortHandler = (filterObj, reviews) => {
    for (let option in filterObj) {
      if (filterObj[option] && option === 'Relevant') {
        let newData = reviews.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return 1;
          }
          return 0;
        });
        return filterReviews(newData.sort((a, b) => {
          if (a.helpfulness > b.helpfulness) {
            return -1;
          } else if (a.helpfulness < b.helpfulness) {
            return 1;
          }
          return 0;
        }));
      } else if (filterObj[option] && option === 'Helpful') {
        return filterReviews(reviews.sort((a, b) => {
          if (a.helpfulness > b.helpfulness) {
            return -1;
          } else if (a.helpfulness < b.helpfulness) {
            return 1;
          }
          return 0;
        }));
      } else if (filterObj[option] && option === 'Newest') {
        return filterReviews(reviews.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return 1;
          }
          return 0;
        }));
      }
    }
  }

  const filterReviews = (reviews) => {
    let newReviews = [];
    reviews.forEach((review) => {
      newReviews.push(review);
    })
    return newReviews;
  }

  const addMoreReviewsToDisplay = () => {
    setDisplay(display+2);
  };

  return (
    <div>
      <div>
        {reviews.map((review, index) => {
          if (index < display) {
            return <ReviewEntry review={review} key={index}/>
          } else {
            return
          }
        })};
      </div>
      <AddReview display={display} reviews={reviews} metaData={metaData} rating={rating} displayHandler={addMoreReviewsToDisplay} product={product} productData={productData}/>
    </div>
  )};

export default ReviewTiles;
