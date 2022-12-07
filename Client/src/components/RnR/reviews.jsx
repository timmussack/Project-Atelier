import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import ReviewTiles from './ReviewTiles.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx'

const Formatting = styled.div`
  margin: 10px 20px;
  font-family: Helvetica, Sans-Serif;
  font-size: 12px;
`;

const Reviews = ({reviews, metaData}) => {

  const [filter, setFilter] = useState({
    Relevant: true,
    Helpful: false,
    Newest: false,
  })

  const optionHandler = (e) => {
    let sortBy = e.target.value;

    for (let option in filter) {
      if (sortBy === option) {
        filter[sortBy] = true;
      } else {
        filter[sortBy] = false;
      }
    }
  };

  return (
  <Formatting>
    <ReviewSortOptions optionHandler={optionHandler} filter={filter} reviews={reviews} metaData={metaData}/>
    <ReviewTiles reviews={reviews} metaData={metaData} filter={filter} />
  </Formatting>
)};

export default Reviews;
