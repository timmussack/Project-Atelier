import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const MoreAnsweredQs = styled.button`
  font-family: 'Jost', sans-serif;
  margin-right: 10px;
  background-color: white;
  color: black;
  height: 50px;
  border: 2px solid #253954;
  border-radius: 10px;
  width: 190px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  font-weight: bold;
`;

const AddQuestion = styled.button`
  font-family: 'Jost', sans-serif;
  background-color: white;
  color: black;
  height: 50px;
  border: 2px solid #253954;
  border-radius: 10px;
  width: 190px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  font-weight: bold;
`;

export default function QAButton( { showQModal, setShowQModal, loadMoreQ, setLoadMoreQ, QAs }) {
  const [showMore, setShowMore] = useState(false);

  const handleMoreAnsweredQs = () => {
    setLoadMoreQ(!loadMoreQ);
    setShowMore(!showMore)
  };

  let buttonText;
  showMore ? buttonText = 'COLLAPSE QUESTIONS' : buttonText = 'MORE QUESTIONS'

  return (
    <div>
      {QAs.length > 2 ? <MoreAnsweredQs data-testid='moreQuestionsButton' onClick={()=> handleMoreAnsweredQs()}>{buttonText}</MoreAnsweredQs> : null}

      <AddQuestion data-testid='addQuestionButton'  onClick={()=> setShowQModal(!showQModal)}>ADD A QUESTION +</AddQuestion>
    </div>
  )
};
