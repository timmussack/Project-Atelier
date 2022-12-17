import React, { useState } from 'react';
import { ShowMoreButton, BodyFormat } from './RnRStyling';

export default function ReviewBody({body}) {
  const [showMore, setShowMore] = useState(false);

  if (showMore) {
    return (
      <>
        <BodyFormat>{body}</BodyFormat>
      </>
    )
  } else {
    return (
      <>
      {body.length > 250 ? (
        <>
          <BodyFormat>{body.slice(0,250)} ...</BodyFormat>
          <ShowMoreButton onClick={() => setShowMore(!showMore)}>Show More</ShowMoreButton>
        </>
      ) : (
        <BodyFormat>{body.slice(0,250)}</BodyFormat>
      )}
      </>
    )
  }
};