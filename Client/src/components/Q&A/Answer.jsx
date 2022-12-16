import styled, { css } from 'styled-components';
import React from 'react';
import axios from 'axios';
import AnswerPhotos from './AnswerPhotos.jsx';

const { useState, useEffect } = React;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const AnswerMain = styled.div`
  font-size: 16px;
  padding: 0px 0px 5px 0px;
  max-width: 50vh;
`;

const AnswerExtras = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Helpful = styled.div`
  padding-right: 5px;
`;

const AnsweredBy = styled.div`
  padding-right: 5px;
`;

const AnswerDate = styled.div`
  padding-right: 5px;
`;

const Yes = styled.div`
  padding-right: 5px;
  text-decoration: underline;
  cursor: pointer;
  :hover { transform: scale(1.05); }
  transition: transform 250ms;
`;

const Votes = styled.div`
  padding-right: 8px;
`;

const Spacer1 = styled.div`
  padding-right: 8px;
`;

const Spacer2 = styled.div`
  padding-right: 8px;
`;

const ReportAnswer = styled.div`
  text-decoration: underline;
  cursor: pointer;
  :hover { transform: scale(1.05); }
  transition: transform 250ms;
`;

const APhotos = styled.div`
  padding: 0px 5px 5px 0px;
`;

export default function Answer( { answer, QA, getAnswers }) {
  const [reported, setReported] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [showPModal, setShowPModal] = useState(false);

  const formatDate = (data) => {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    return month + ' ' + day + ', ' + year;
  };

  const handleAnswerReport = (answerId) => {
    setReported(true)
    axios.put('/qa/answers/:answer_id/report', {
      answer_id: answerId
    })
      .then((response) => {

      })
      .catch((error) => {
        console.log(error, 'Error from reporting an answer')
      })
  };

  const handleAnswerHelpful = (answerId) => {
    setHelpful(true)
    axios.put('/qa/answers/:answer_id/helpful', {
      answer_id: answerId
    })
      .then((response) => {
        getAnswers(QA.question_id);
      })
      .catch((error) => {
        console.log(error, 'Error from marking answer as helpful')
      })
  };

  return (
    <AnswerContainer>

      <AnswerMain>
        {answer.body}
      </AnswerMain>

      <APhotos>
        <AnswerPhotos showPModal={showPModal} setShowPModal={setShowPModal} photos={answer.photos}/>
      </APhotos>

      <AnswerExtras>

        {answer.answerer_name.toLowerCase() === 'seller' ? <AnsweredBy> by <strong>Seller</strong>, </AnsweredBy> : <AnsweredBy> by {answer.answerer_name}, </AnsweredBy>}

        <AnswerDate> {formatDate(answer.date)} </AnswerDate>

        <Spacer1> | </Spacer1>

        <Helpful> Helpful? </Helpful>

        {!helpful ? <Yes onClick={() => handleAnswerHelpful(answer.answer_id)}> Yes </Yes> : <Yes> Yes </Yes>}

        <Votes> ({answer.helpfulness}) </Votes>

        <Spacer2> | </Spacer2>

        {!reported ? <ReportAnswer onClick={() => handleAnswerReport(answer.answer_id)}> Report </ReportAnswer> : <ReportAnswer> Reported </ReportAnswer>}

      </AnswerExtras>

    </AnswerContainer>
  );
};
