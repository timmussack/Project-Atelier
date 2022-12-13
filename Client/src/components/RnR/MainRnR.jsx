import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styled, { css } from 'styled-components';

const RNRTitle = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
  position:relative ;
  width: 50%;
  margin: 0 auto;
`;

const RNRContainer = styled.div`
  font-family: Helvetica, Sans-Serif;
  position:relative;
  width: 50%;
  margin: 0 auto;
  display: flex;
  color: rgb(54, 54, 54);
`;

const MainRnR = ({ rating, reviews, product, metaData, productData, setReviews }) => {

  return (
    <>
      <RNRTitle> RATINGS & REVIEWS </RNRTitle>
      <RNRContainer id="ratings">
        <Ratings rating={rating} reviews={reviews} metaData={metaData}/>
        <Reviews reviews={reviews} setReviews={setReviews} rating={rating} metaData={metaData} product={product} productData={productData}/>
      </RNRContainer>
    </>
)};

export default MainRnR;
