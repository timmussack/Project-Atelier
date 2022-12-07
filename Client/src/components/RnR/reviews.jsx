import React, { useState } from 'react';
import ReviewTiles from './ReviewTiles.jsx';
import ReviewSortOptions from './ReviewSortOptions.jsx'
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
  <>
    <h1> Reviews: </h1>
    <ReviewSortOptions optionHandler={optionHandler} filter={filter} reviews={reviews} metaData={metaData}/>
    <ReviewTiles reviews={reviews} metaData={metaData} filter={filter} />
  </>
)};

export default Reviews;
