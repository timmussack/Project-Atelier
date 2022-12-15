import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const MoreAnsweredQs = styled.button`
  margin-right: 10px;
  background-color: #253954;
  color: white;
  height: 50px;
  border: 1px solid;
  width: 220px;
  cursor: pointer;
  font-weight: bold;
`;

const AddQuestion = styled.button`
  background-color: #253954;
  color: white;
  height: 50px;
  border: 1px solid;
  width: 150px;
  cursor: pointer;
  font-weight: bold;
`;

export default function QAButton( { showQModal, setShowQModal, loadMoreQ, setLoadMoreQ, QAs }) {
  const [showMore, setShowMore] = useState(false);

  const handleMoreAnsweredQs = () => {
    setLoadMoreQ(!loadMoreQ);
    setShowMore(!showMore)
  };

  let buttonText;
  showMore ? buttonText = 'COLLAPSE QUESTIONS' : buttonText = 'MORE ANSWERED QUESTIONS'

  return (
    <div>
      {QAs.length > 2 ? <MoreAnsweredQs data-testid='moreQuestionsButton' onClick={()=> handleMoreAnsweredQs()}>{buttonText}</MoreAnsweredQs> : null}

      <AddQuestion data-testid='addQuestionButton'  onClick={()=> setShowQModal(!showQModal)}>ADD A QUESTION +</AddQuestion>
    </div>
  )
};
