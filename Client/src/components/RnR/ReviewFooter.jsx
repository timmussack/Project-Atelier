import React from 'react';
import styled, { css } from 'styled-components';

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

const ReviewFooter = () => {
  return (
    <FooterFormatting>
      <Helpful> Was this review helpful? </Helpful>
      <Yes>Yes</Yes>
      <Spacer2> | </Spacer2>
      <Yes>No</Yes>
    </FooterFormatting>
  )
};

export default ReviewFooter;