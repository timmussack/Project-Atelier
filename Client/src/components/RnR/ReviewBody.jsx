import React, { useState } from 'react';

const ReviewBody = ({summary, body}) => {
  const [showMore, setShowMore] = useState(false);

  if (showMore) {
    return (
      <>
        <h3>{summary}</h3>
        <p>{body}</p>
      </>
    )
  } else {
    return (
      <>
      <h3>{summary}</h3>
      <p>{body.slice(0,250)}</p>
      <p onClick={() => setShowMore(!showMore)}>Show More</p>
      </>
    )
  }
};

export default ReviewBody;
