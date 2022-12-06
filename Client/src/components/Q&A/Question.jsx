import styled, { css } from 'styled-components';
import React from 'react';
import Answer from './Answer.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionContainer = styled.div`
  font-family: Helvetica, Sans-Serif;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin: 0px 20px 0px 20px;
`;

const QuestionMain = styled.div`
  font-weight: bold;
`;

const QuestionExtras = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: row;
`;

const Helpful = styled.div`
  padding-right: 5px;
`;

const Yes = styled.div`
  padding-right: 5px;
  text-decoration: underline;
  cursor: pointer;
`;

const Votes = styled.div`
  padding-right: 8px;
`;

const Spacer = styled.div`
  padding-right: 8px;
`;

const AddAnswer = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 0px 0px;
`;

const A = styled.div`
  font-family: Helvetica, Sans-Serif;
  font-weight: bold;
  padding-left: 20px;
`;

const Answers = styled.div`
  padding-left: 5px;
`;

const MoreButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 0px 15px 35px;
`;

export default function Question( { QA }) {
  const [answers, setAnswers] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [buttonText, setButtonText] = useState('LOAD MORE ANSWERS');

  const getAnswers = (questionId) => {
    axios.get('/qa/questions/:question_id/answers', {
      params: {
        question_id: questionId,
        page: 1,
        count: 5,
      },
    })
      .then((response) => {
        let data = response.data.results.sort((a, b) => {
          return b.helpfulness - a.helpfulness
        })
        setAnswers(data);
      })
      .catch((error) => {
        console.log('Error in client from getAnswers request', error);
      });
  };

  useEffect(() => {
    getAnswers(QA.question_id);
  }, [QA]);

  const handleShowMore = () => {
    setLoadMore(!loadMore)
    !loadMore ? setButtonText('COLLAPSE ANSWERS') : setButtonText('LOAD MORE ANSWERS')
  };

  return (
    <>
      <QuestionContainer>
        <QuestionMain>
          Q: {QA.question_body}
        </QuestionMain>
        <QuestionExtras>
          <Helpful>Helpful?</Helpful>
          <Yes onClick={() => alert('Helpful up vote.')}> Yes </Yes>
          <Votes> ({QA.question_helpfulness}) </Votes>
          <Spacer> | </Spacer>
          <AddAnswer onClick={() => alert('Add an answer.')}>Add Answer</AddAnswer>
        </QuestionExtras>
      </QuestionContainer>

      <AnswerWrapper>
        <A>A:</A>
        <Answers>
          {!loadMore ? answers.filter((item, index) => index < 2).map((answer) => {
            return (
                <Answer key={answer.answer_id} answer={answer} />
            )
          }) : answers.map((answer) => {
            return (
                <Answer key={answer.answer_id} answer={answer} />
            )
          })}
        </Answers>
      </AnswerWrapper>
      {answers.length > 2 ? <MoreButton onClick={() => handleShowMore()}>{buttonText}</MoreButton> : null}
    </>
  );
}