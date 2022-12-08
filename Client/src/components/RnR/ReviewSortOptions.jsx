import React from 'react';
import styled, { css } from 'styled-components';

const Formatting = styled.div`

`
const ReviewSortOptions = ({ reviews, optionHandler }) => {

  return (
    <div>
      {reviews.length} reviews, Sort By
      <select onChange={(e) => optionHandler(e)}>
        <option value='relevant'>Relevant</option>
        <option value='helpful'>Helpful</option>
        <option value='newest'>Newest</option>
      </select>
    </div>
  )
}

export default ReviewSortOptions;
