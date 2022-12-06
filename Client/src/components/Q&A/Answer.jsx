import styled, { css } from 'styled-components';
import React from 'react';

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

export default function Question( { answer }) {

  const formatDate = (data) => {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    return month + ' ' + day + ', ' + year;
  }

  return (
    <AnswerContainer>
      <AnswerMain>
        {answer.body}
      </AnswerMain>
      {/* <AnswerPhotos>
        {photoContent}
      </AnswerPhotos> */}
      <AnswerExtras>
        <AnsweredBy> {answer.answerer_name}, </AnsweredBy>
        <AnswerDate> {formatDate(answer.date)} </AnswerDate>
        <Spacer1> | </Spacer1>
        <Helpful> Helpful? </Helpful>
        <Yes onClick={() => alert('Helpful up vote.')}> Yes </Yes>
        <Votes> ({answer.helpfulness}) </Votes>
        <Spacer2> | </Spacer2>
        <ReportAnswer onClick={() => alert('Report an answer.')}> Report </ReportAnswer>
      </AnswerExtras>
    </AnswerContainer>
  );
}

// {answer.photos} is and array of objects
//   {id: 5342584, url: 'http://res.cloudinary.com/dvpmx7xsz/
