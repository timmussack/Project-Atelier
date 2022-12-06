import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const MoreAnswers = styled.button`
  background: transparent;
  margin: 20px 10px 20px 20px;
  height: 40px;
  border: 1px solid;
  cursor: pointer;
`;

const AddQuestion = styled.button`
  background: transparent;
  height: 40px;
  border: 1px solid;
  cursor: pointer;
`;

export default function QAButton( { showQModal, setShowQModal }) {

  return (
    <div>
      <MoreAnswers onClick={()=> alert('Get more answers')}>MORE ANSWERED QUESTIONS</MoreAnswers>

      <AddQuestion  onClick={()=> setShowQModal(!showQModal)}>ADD A QUESTION +</AddQuestion>
    </div>
  )

};