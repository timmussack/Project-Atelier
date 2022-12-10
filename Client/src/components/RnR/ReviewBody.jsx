import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ShowMoreButton = styled.button`
  background: transparent;
  border: 1px solid;
  cursor: pointer;
  text-decoration: underline;
  border: none;
  margin-bottom: 10px;
`;

const BodyFormat = styled.div`
  font-strech: expanded;
  margin-bottom: 20px;
`;

const ReviewBody = ({body}) => {
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

export default ReviewBody;
