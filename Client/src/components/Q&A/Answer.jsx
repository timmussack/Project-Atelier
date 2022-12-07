import styled, { css } from 'styled-components';
import React from 'react';
import AnswerPhotos from './AnswerPhotos.jsx';

const { useState, useEffect } = React;

const AnswerContainer = styled.div`
  font-family: Helvetica, Sans-Serif;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const AnswerMain = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
`;

const AnswerExtras = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
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
`;

const APhotos = styled.div`
  padding: 0px 5px 10px 0px;
`;

export default function Answer( { answer }) {
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

  const handleReport = (answerId) => {
    setReported(true)
    console.log(answerId)
  };

  const handleAnswerHelpful = (answerId) => {
    setHelpful(true)
    console.log(answerId)
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
        {answer.answerer_name === 'Seller' ? <AnsweredBy> by <strong>{answer.answerer_name}</strong>, </AnsweredBy> : <AnsweredBy> by {answer.answerer_name}, </AnsweredBy>}

        <AnswerDate> {formatDate(answer.date)} </AnswerDate>

        <Spacer1> | </Spacer1>

        <Helpful> Helpful? </Helpful>

        {!helpful ? <Yes onClick={() => handleAnswerHelpful(answer.answer_id)}> Yes </Yes> : <Yes> Yes </Yes>}

        <Votes> ({answer.helpfulness}) </Votes>

        <Spacer2> | </Spacer2>

        {!reported ? <ReportAnswer onClick={() => handleReport(answer.answer_id)}> Report </ReportAnswer> : <ReportAnswer> Reported </ReportAnswer>}

      </AnswerExtras>

    </AnswerContainer>
  );
}

// {answer.photos} is and array of objects
//   {id: 5342584, url: 'http://res.cloudinary.com/dvpmx7xsz/
