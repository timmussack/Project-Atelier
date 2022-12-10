import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const MoreAnsweredQs = styled.button`
  background: #253954;
  color: white;
  margin: 20px 10px 30px 0px;
  height: 50px;
  border: 1px solid;
  cursor: pointer;
  font-size: large;
`;

const AddQuestion = styled.button`
  background: #253954;
  color: white;
  height: 50px;
  border: 1px solid;
  cursor: pointer;
  font-size: large;
`;

export default function QAButton( { showQModal, setShowQModal, loadMoreQ, setLoadMoreQ }) {
  const [buttonText, setButtonText] = useState('MORE ANSWERED QUESTIONS');

  const handleMoreAnsweredQs = () => {
    setLoadMoreQ(!loadMoreQ);
    !loadMoreQ ? setButtonText('COLLAPSE QUESTIONS') : setButtonText('MORE ANSWERED QUESTIONS');
  };

  return (
    <div>
      <MoreAnsweredQs onClick={()=> handleMoreAnsweredQs()}>{buttonText}</MoreAnsweredQs>

      <AddQuestion  onClick={()=> setShowQModal(!showQModal)}>ADD A QUESTION +</AddQuestion>
    </div>
  )
};