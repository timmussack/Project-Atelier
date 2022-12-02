import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import QuestionList from './QAList.jsx';

const { useState, useEffect } = react;

export default function QA() {
  return (
    <>
      <div> QUESTIONS & ANSWERS </div>
      <QuestionList />
    </>
  );
}
