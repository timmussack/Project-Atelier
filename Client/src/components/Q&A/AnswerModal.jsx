import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const AModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

const AModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  width: 50%;
`;

const ModalButton = styled.button`
  background: transparent;
  border: 1px solid;
  margin-right: 20px;
`;

const ModalForm = styled.form`
  overflow: auto;
`;

export default function AnswerModal({ productData, product, showAModal, setShowAModal, QA, getAnswers }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleAddAnswer = (answer, nickname, email, questionId) => {
    axios.post('/qa/questions/:question_id/answers', {
      body: answer,
      name: nickname,
      email: email,
      //photos: Need to implement adding photos to an answer
      questionId: questionId
    })
    .then((response) => {
      getAnswers(QA.question_id)
    })
    .catch((error) => {
      console.log('Error in QuestionModal', error);
    })
  };

  let modalContent;

  if (showAModal) {
    modalContent = (
      <AModal>

        <AModalContent>

          <h3>Submit your answer</h3>

          <p>{productData.name}: {QA.question_body}</p>

          <ModalForm onSubmit={() => {
              handleAddAnswer(answer, nickname, email, QA.question_id);
              setAnswer('');
              setShowAModal(!showAModal);
            }}>

            <label>
              <div> Your Answer* </div>
              <textarea maxLength='1000' type='text' value={answer} style={{width: '90%', height: '200px'}} onChange={e => {
              setAnswer(e.target.value)
              }} required> </textarea>
            </label>

            <label>
              <div> What is your nickname* </div>
              <input maxLength='60' type='text' style={{width: '90%', height: '15px'}} placeholder='Example: jack543!' onChange={e => {
              setNickname(e.target.value)
              }} required/>
            </label>

            <label>
              <div> Your email* </div>
              <input maxLength='60' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$' style={{width: '90%', height: '15px'}} placeholder='Example: jack@email.com' onChange={e => {
              setEmail(e.target.value)
              }} required/>
            </label>

            <p>For privacy reasons, do not use your full name or email address</p>

            <ModalButton type='submit'>Submit Answer</ModalButton>

            <ModalButton onClick={() => {
              setShowAModal(!showAModal)
            }}>Close without submission</ModalButton>

          </ModalForm>

        </AModalContent>

      </AModal>
    );
  } else {
    modalContent = (
      <>
      </>
    )
  };

  return (
    <>
      {modalContent}
    </>
  )
};















// Add an Answer Modal
// Through the link provided on each question within the Questions list, users will be allowed to submit an answer for the product.
// Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Submit your Answer”. The modal should be subtitled: “[Product Name]: [Question Body]” . The appropriate product name and question body should be inserted into the subtitle.
// The following inputs should appear on the question form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
// 1.3.6.1. Your Answer (mandatory)
// This text input should be a large text window allowing up to 1000 characters.
// 1.3.6.2. What is your nickname (mandatory)
// A text input allowing up to 60 characters for the user’s display name.
// Placeholder text should read: “Example: jack543!”.
// Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
// 1.3.6.3. Your email (mandatory)
// A text input allowing up to 60 characters.
// Placeholder text should read: “Example: jack@email.com”.
// Below this field, the text “For authentication reasons, you will not be emailed” will appear.
// 1.3.6.4. Upload your photos
// A button will appear allowing users to upload their photos to the form. Up to five photos should be allowed for each answer.
// Clicking the button should open a separate window where the photo to be can be selected.
// After the first image is uploaded, a thumbnail showing the image should appear. A user should be able to add up to five images before the button to add disappears, preventing further additions.
// 1.3.6.5. Submit answer (button)
// A button by which the answer can be submitted.
// Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.
