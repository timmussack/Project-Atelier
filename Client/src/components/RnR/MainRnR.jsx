import React, { useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styled, { css } from 'styled-components';
import axios from 'axios';

const RNRTitle = styled.div`
  font-size: 16px;
  position:relative ;
  width: 1200px;
  margin: auto;
`;

const RNRContainer = styled.div`
  font-family: Jost;
  position:relative;
  width: 1200px;
  margin: auto;
  display: flex;
  align-self:center;
`;

const MainRnR = ({ rating, reviews, product, metaData, productData, setReviews }) => {

  const handleElementClick = (event) => {
    const clickTime = new Date();
    axios.post('/interactions', {
      element: event.target.outerHTML,
      time: clickTime,
      widget: 'Ratings & Reviews'
    })
      .then((response) => {
      })
      .catch((error) => {
        console.log(error, 'Error in client from R&R interaction post request');
      });
  };

  useEffect(() => {
    const rnrElement = document.getElementById('ratings');
    rnrElement.addEventListener('click', handleElementClick, true);
  }, [])

  return (
    <div style={{width: '100%'}}>
      <RNRTitle data-testid='RNRTitle' > RATINGS & REVIEWS </RNRTitle>
      <RNRContainer id="ratings">
        <Ratings rating={rating} reviews={reviews} metaData={metaData} setReviews={setReviews} product={product} />
        <Reviews reviews={reviews} setReviews={setReviews} rating={rating} metaData={metaData} product={product} productData={productData}/>
      </RNRContainer>
    </div>
)};

export default MainRnR;
