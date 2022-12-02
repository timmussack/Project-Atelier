import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import QuestionList from './QAList.jsx';

const { useState, useEffect } = react;

export default function QAContainer( { product } ) {

  useEffect(() => {
    axios.get('/qa/questions', {
      params: {
        product_id: product,
        page: 1,
        count: 10,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error in client from get request', error);
      });
  }, []);


  return (
    <>
      <div> QUESTIONS & ANSWERS </div>
      <QuestionList />
    </>
  );
}
