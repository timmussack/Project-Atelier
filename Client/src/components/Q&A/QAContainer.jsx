import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import QuestionList from './QAList.jsx';

const { useState, useEffect } = react;

export default function QAContainer( { product } ) {
  const [QAs, setQAs] = useState([]);
  const [answers, setAnswers] = useState([]);

  const getQAs = (productId) => {
    axios.get('/qa/questions', {
      params: {
        product_id: productId,
        page: 1,
        count: 10,
      },
    })
      .then((response) => {
        setQAs(response.data.results)
        //console.log(response.data);
      })
      .catch((error) => {
        console.log('Error in client from getQAs request', error);
      });
  };

  const getAnswers = (questionId) => {
    axios.get('/qa/questions/:question_id/answers', {
      params: {
        question_id: questionId,
      },
    })
      .then((response) => {
        setAnswers(response.data.results);
      })
      .catch((error) => {
        console.log('Error in client from getAnswers request', error);
      });
  };

  useEffect(() => {
    getQAs(product);
  }, []);

  return (
    <>
      <div> QUESTIONS & ANSWERS </div>
      <QuestionList QAs={QAs}/>
    </>
  );
}