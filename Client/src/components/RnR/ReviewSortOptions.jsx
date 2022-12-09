import React from 'react';
import styled, { css } from 'styled-components';

const Formatting = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 35px;
`;
const DropdownMenu = styled.select`
  border: none;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
`;
const ReviewSortOptions = ({ reviews, optionHandler }) => {

  return (
    <Formatting>
      {reviews.length} reviews, sorted by
      <DropdownMenu onChange={(e) => optionHandler(e)}>
        <option value='relevant'>relevance</option>
        <option value='helpful'>helpful</option>
        <option value='newest'>newest</option>
      </DropdownMenu>
    </Formatting>
  )
}

export default ReviewSortOptions;
