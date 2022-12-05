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
      {body.length > 250 ? (
        <button onClick={() => setShowMore(!showMore)}>Show More</button>
      ) : (
        <p></p>
      )}
      </>
    )
  }
};

export default ReviewBody;
