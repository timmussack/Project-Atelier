import styled, { css } from 'styled-components';
import React from 'react';

export default function Question( { QA }) {
  console.log('question', QA);
  return (
    <div className='App'> Q: {QA.question_body}</div>
    <

  );
}