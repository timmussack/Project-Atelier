import styled, { css } from 'styled-components';
import React from 'react';
import Answer from './Answer.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerModal from './AnswerModal.jsx';

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin: auto;
`;

const QuestionMain = styled.div`
  font-weight: bold;
  max-width: 50vh;
  font-size: 16px;
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

const Spacer1 = styled.div`
  padding-right: 8px;
`;

const AddAnswer = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const AnswerWrapper = styled.div`
  text-overflow: ellipsis;
  max-height: 50vh;
  overflow-y: auto;
  max-width: auto;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const A = styled.div`
  font-weight: bold;
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
  margin: 0px 0px 15px 16px;
`;

const NoAnswers = styled.div`
  font-size: 12px;
  padding-bottom: 15px;
  padding-left: 20px;
`;

const Spacer2 = styled.div`
  padding-right: 8px;
`;

const ReportQuestion = styled.div`
  padding-right: 8px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function Question( { QA, product, productData, getQAs }) {
  const [answers, setAnswers] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [buttonText, setButtonText] = useState('LOAD MORE ANSWERS');
  const [showAModal, setShowAModal] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  //This function is used to sort the answers by helpfulness before they become the answers state.
  const sortByHelpfulness = (a, b) => {
    const resultA = a.helpfulness;
    const resultB = b.helpfulness;
    let comparison = 0;
    if (resultA > resultB) {
      comparison = -1;
    } else {
      comparison = 1;
    };
    return comparison;
  };

  //This function moves answers from the "Seller" to the front of the answer array before they become the answers state.
  const moveSellerToFront = (answersArray) => {
    for (let i = 0; i < answersArray.length; i++) {
      if (answersArray[i].answerer_name.toLowerCase() === 'seller') {
        answersArray = answersArray.splice(i, 1).concat(answersArray);
      };
    };
    return answersArray;
  };

  const getAnswers = (questionId) => {
    axios.get('/qa/questions/:question_id/answers', {
      params: {
        question_id: questionId,
        page: 1,
        count: 100,
      },
    })
      .then((response) => {
        let firstSortData = response.data.results.sort(sortByHelpfulness);
        let secondSortData = moveSellerToFront(firstSortData);
        setAnswers(secondSortData);
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

  const handleQuestionHelpful = (questionId) => {
    setHelpful(true);
    axios.put('/qa/questions/:question_id/helpful', {
      question_id: questionId
    })
      .then((response) => {
        getQAs(product);
      })
      .catch((error) => {
        console.log(error, 'Error from marking question as helpful')
      })
  };

  const handleQuestionReport = (questionId) => {
    setReported(true)
    axios.put('/qa/questions/:question_id/report', {
      question_id: questionId
    })
      .then((response) => {
        //getQAs(product);
      })
      .catch((error) => {
        console.log(error, 'Error from reporting a question')
      })
  };

  return (
    <>
      <QuestionContainer>

        <QuestionMain>
          Q: {QA.question_body}
        </QuestionMain>

        <QuestionExtras>

          <Helpful>Helpful?</Helpful>

          {!helpful ? <Yes onClick={() => handleQuestionHelpful(QA.question_id)}> Yes </Yes> : <Yes> Yes </Yes>}

          <Votes> ({QA.question_helpfulness}) </Votes>

          <Spacer1> | </Spacer1>

          {!reported ? <ReportQuestion onClick={() => handleQuestionReport(QA.question_id)}> Report </ReportQuestion> : <ReportQuestion> Reported </ReportQuestion>}

          <Spacer2> | </Spacer2>

          <AddAnswer onClick={() => setShowAModal(!showAModal)}>Add Answer</AddAnswer>

        </QuestionExtras>

      </QuestionContainer>

      <AnswerWrapper>
        {answers.length === 0 ? <NoAnswers>This question has not been answered.</NoAnswers> : <A>A:</A>}
        <Answers>
          {!loadMore ? answers.filter((item, index) => index < 2).map((answer) => {
            return (
                <Answer key={answer.answer_id} answer={answer} QA={QA} getAnswers={getAnswers}/>
            )
          }) : answers.map((answer) => {
            return (
                <Answer key={answer.answer_id} answer={answer} QA={QA} getAnswers={getAnswers}/>
            )
          })}
        </Answers>
      </AnswerWrapper>
      {answers.length > 2 ? <MoreButton onClick={() => handleShowMore()}>{buttonText}</MoreButton> : null}

      <AnswerModal QA={QA} product={product} productData={productData} showAModal={showAModal} setShowAModal={setShowAModal} getAnswers={getAnswers}/>
    </>
  );
};