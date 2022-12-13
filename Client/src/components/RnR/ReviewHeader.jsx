import React from 'react';
import Stars from './Stars.jsx';
import styled, { css } from 'styled-components';

const UsernameDate = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Formatting = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
`;

const ReviewHeader = ({rating, user, date}) => {
  return (
    <Formatting>
      <Stars rating={rating}/>
      <UsernameDate>
        {user}, {date}
      </UsernameDate>
    </Formatting>
  )
};

export default ReviewHeader;
