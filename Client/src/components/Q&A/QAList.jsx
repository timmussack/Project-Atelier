import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import Question from './Question.jsx';

const { useState, useEffect } = react;

const QAWrapper = styled.div`
  text-overflow: ellipsis;
  max-height: 70vh;
  overflow-y: auto;
  margin-bottom: 12px;
`;

export default function QuestionList( { QAs, product, productData, loadMoreQ, setLoadMoreQ, getQAs, nightMode }) {

  return (
    <QAWrapper>

      {!loadMoreQ ? QAs.filter((item, index) => index < 2).map((QA) => {
        return (
          <div key={QA.question_id}>
            <Question QA={QA} product={product} productData={productData} getQAs={getQAs} nightMode={nightMode}/>
          </div>
        )
      }) : QAs.map((QA) => {
        return (
          <div key={QA.question_id}>
            <Question QA={QA} product={product} productData={productData} getQAs={getQAs} nightMode={nightMode}/>
          </div>
        )
      })}

    </QAWrapper>
  )
};



