import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const MoreAnsweredQs = styled.button`
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

export default function QAButton( { showQModal, setShowQModal, loadMoreQ, setLoadMoreQ }) {

  return (
    <div>
      <MoreAnsweredQs onClick={()=> setLoadMoreQ(loadMoreQ += 2)}>MORE ANSWERED QUESTIONS</MoreAnsweredQs>

      <AddQuestion  onClick={()=> setShowQModal(!showQModal)}>ADD A QUESTION +</AddQuestion>
    </div>
  )

};