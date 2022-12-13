import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const Helpful = styled.div`
  padding-right: 5px;
`;

const Yes = styled.div`
  padding-right: 5px;
  text-decoration: underline;
  cursor: pointer;
`;

const Spacer2 = styled.div`
  padding-right: 8px;
`;

const FooterFormatting = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
`;

const ReviewFooter = ({helpfulness, reviewID}) => {
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const reviewHelpful = (id) => {
    setHelpful(true);

    axios.put('/reviews/:review_id/helpful', { review_id: id })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log('Error marking review as helpful', err)
      });
  };

  const reportReview = (id) => {
    setReported(true);

    axios.put('/reviews/:review_id/report', { review_id: id })
      .then(info => info)
      .catch((err) => {
        console.log('Error reporting review', err)
      });
  };

  return (
    <FooterFormatting>
      <Helpful> Was this review helpful? </Helpful>
      {!helpful ? (<Yes onClick={() => reviewHelpful(reviewID)}>Yes ({helpfulness})</Yes>) : (<Yes>Yes ({helpfulness += 1})</Yes>)}
      <Spacer2> | </Spacer2>
      {!reported ? (<Yes onClick={() => reportReview(reviewID)}>Report</Yes>) : (<Yes>Reported</Yes>)}
    </FooterFormatting>
  )
};

export default ReviewFooter;