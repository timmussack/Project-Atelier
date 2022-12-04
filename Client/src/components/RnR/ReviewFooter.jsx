import React from 'react';

const ReviewFooter = ({recommend, response, helpfulness}) => {
  return (
    <>
      <p>{helpfulness} users found this review helpful</p>
    </>
  )
};

export default ReviewFooter;