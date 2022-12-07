import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styled, { css } from 'styled-components';

const RNRTitle = styled.div`
  font-family: Helvetica, Sans-Serif;
  margin: 10px 20px;
  font-size: 12px;
`;

const MainRnR = ({ rating, reviews, productID, metaData }) => {

  return (
  <>
    <RNRTitle> RATINGS & REVIEWS </RNRTitle>
    <div>
      <Ratings rating={rating} reviews={reviews} metaData={metaData}/>
    </div>

    <div>
      <Reviews reviews={reviews} rating={rating} metaData={metaData}/>
    </div>
  </>
)};

export default MainRnR;
