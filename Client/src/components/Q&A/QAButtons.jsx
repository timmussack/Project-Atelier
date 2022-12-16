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
  :hover { transform: scale(1.05); }
  transition: transform 250ms;
`;

const AddQuestion = styled.button`
  font-family: 'Jost', sans-serif;
  color: black;
  height: 50px;
  border: 2px solid #253954;
  border-radius: 10px;
  width: 190px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  font-weight: bold;
  :hover { transform: scale(1.05); }
  transition: transform 250ms;
`;

export default function QAButton( { showQModal, setShowQModal, loadMoreQ, setLoadMoreQ, QAs, nightMode}) {
  const [showMore, setShowMore] = useState(false);

  const handleMoreAnsweredQs = () => {
    setLoadMoreQ(!loadMoreQ);
    setShowMore(!showMore)
  };

  let buttonText;
  showMore ? buttonText = 'COLLAPSE QUESTIONS' : buttonText = 'MORE QUESTIONS'

  return (
    <div>
      {QAs.length > 2 ? <MoreAnsweredQs style={nightMode ? {backgroundColor: '#253954', color: '#DCD7C9'} : {backgroundColor: 'white', color: 'black'}}data-testid='moreQuestionsButton' onClick={()=> handleMoreAnsweredQs()}>{buttonText}</MoreAnsweredQs> : null}

      <AddQuestion style={nightMode ? {backgroundColor: '#253954', color: '#DCD7C9'} : {backgroundColor: 'white', color: 'black'}} data-testid='addQuestionButton'  onClick={()=> setShowQModal(!showQModal)}>ADD A QUESTION +</AddQuestion>
    </div>
  )
};
