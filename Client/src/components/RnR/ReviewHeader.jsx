import React from 'react';
import Stars from './Stars.jsx';

const ReviewHeader = ({rating, user, date}) => {
  return (
    <>
      <p>
        <Stars rating={rating}/>  {user} {date}
      </p>
    </>
  )
};

export default ReviewHeader;
