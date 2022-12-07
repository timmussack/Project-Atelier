import React from 'react';
import styled, { css } from 'styled-components';

const Formatting = styled.div`

`
const ReviewSortOptions = ({ reviews, optionHandler, filter, metaData }) => {

  return (
    <div>
      {reviews.length} reviews, Sort On
      <select onChange={(e) => optionHandler(e)}>
        <option value='Relevant'> Relevant</option>
        <option value='Helpful'> Helpful</option>
        <option value='Newest'> Newest</option>
      </select>
    </div>
  )
}

export default ReviewSortOptions;
