import React, { useState } from 'react';
import axios from 'axios';
import { Helpful, Yes, Spacer2, FooterFormatting } from './RnRStyling';

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

export default function ReviewFooter({helpfulness, reviewID}) {
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  return (
    <FooterFormatting>
      <Helpful> Was this review helpful? </Helpful>
      {!helpful ? (<Yes onClick={() => reviewHelpful(reviewID)}>Yes ({helpfulness})</Yes>) : (<Yes>Yes ({helpfulness += 1})</Yes>)}
      <Spacer2> | </Spacer2>
      {!reported ? (<Yes onClick={() => reportReview(reviewID)}>Report</Yes>) : (<Yes>Reported</Yes>)}
    </FooterFormatting>
  )
};
