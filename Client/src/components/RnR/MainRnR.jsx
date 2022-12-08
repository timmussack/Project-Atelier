import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styled, { css } from 'styled-components';

const RNRTitle = styled.div`
  font-family: Helvetica, Sans-Serif;
  margin: 10px 20px;
  font-size: 12px;
`;

const MainRnR = ({ rating, reviews, product, metaData, productData, setReviews }) => {

  return (
  <>
    <RNRTitle> RATINGS & REVIEWS </RNRTitle>
    <div>
      <Ratings rating={rating} reviews={reviews} metaData={metaData}/>
    </div>

    <div>
      <Reviews reviews={reviews} setReviews={setReviews} rating={rating} metaData={metaData} product={product} productData={productData}/>
    </div>
  </>
)};

export default MainRnR;
