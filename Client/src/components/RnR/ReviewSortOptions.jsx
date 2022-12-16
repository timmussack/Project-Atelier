import React from 'react';
import { SortOptionsFormatting, DropdownMenu } from './RnRStyling';

export default function ReviewSortOptions({ reviews, optionHandler }) {
  return (
    <SortOptionsFormatting>
    {reviews.length} reviews, sorted by
    <DropdownMenu onChange={(e) => optionHandler(e)}>
      <option value='relevant'>relevance</option>
      <option value='helpful'>helpful</option>
      <option value='newest'>newest</option>
    </DropdownMenu>
  </SortOptionsFormatting>
  )
}
