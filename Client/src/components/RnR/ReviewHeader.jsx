import React from 'react';
import Stars from './Stars.jsx';
import styled, { css } from 'styled-components';

const UsernameDate = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ReviewHeader = ({rating, user, date}) => {
  return (
    <>
      <Stars rating={rating}/>
      <UsernameDate>
        {user}, {date}
      </UsernameDate>
    </>
  )
};

export default ReviewHeader;
