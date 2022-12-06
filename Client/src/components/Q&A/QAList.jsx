import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import Question from './Question.jsx';

const { useState, useEffect } = react;

export default function QuestionList( { QAs }) {
//console.log('QAs in QuestionList', QAs)
  return (
    <div>
      {QAs.map((QA) => {
        return (
          <div key={QA.question_id}>
            <Question QA={QA} />
          </div>
        )
     })}
    </div>
  )

};

