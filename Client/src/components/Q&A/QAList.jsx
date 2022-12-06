import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import Question from './Question.jsx';

const { useState, useEffect } = react;

export default function QuestionList( { QAs, product, productData, loadMoreQ, setLoadMoreQ }) {

  return (
    <div>
      {QAs.filter((item, index) => index < loadMoreQ).map((QA) => {
        return (
          <div key={QA.question_id}>
            <Question QA={QA} product={product} productData={productData} />
          </div>
        )
     })}
    </div>
  )

};



