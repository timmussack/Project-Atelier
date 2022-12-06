import React from 'react';
import Stars from './Stars.jsx';

const ReviewHeader = ({rating, user, date}) => {
  return (
    <>
      <Stars rating={rating}/>
      <p>{user}</p>
      <p>{date}</p>
    </>
  )
};

export default ReviewHeader;
