import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const QModal = styled.div`
  //display: none;
  font-family: Helvetica, Sans-Serif;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const QModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

const ModalButton = styled.button`
  background: transparent;
  border: 1px solid;
`;


export default function QuestionModal({ productData, product, showQModal, setShowQModal }) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  let modalContent;

  if (showQModal) {
    modalContent = (
      <QModal>
        <QModalContent>
        <h3>Ask Your Question</h3>
        <p>About the {productData.name}</p>
        <form>
          <label>
            Your Question*
            <input style={{height: '100px'}} size="90" placeholder='' onChange={e => {
            setQuestion(e.target.value)
             }} />
          </label>

          <label>
            What is your nickname*
            <input size="60" placeholder='Example: jackson11!' onChange={e => {
            setNickname(e.target.value)
            }} />
          </label>
          <p>For privacy reasons, do not use your full name or email address</p>
        </form>

      <ModalButton onClick={() => {
        //onEdit(question, nickname, email, product)
        setShowQModal(!showQModal)
      }}>Submit Question</ModalButton>
      </QModalContent>
      </QModal>
    );
  } else {
    modalContent = (
      <>
      </>
    )
  }

  return (
    <>
      {modalContent}
    </>
  )

};






// Add a Question
// At the bottom of the Questions & Answers module, a button will appear allowing users to create a new question for the product. This button should always be available on any product page.
// Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Ask Your Question” and subtitled “About the [Product Name Here]”. The product name should be inserted into the subtitle.
// The following inputs should appear on the question form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
// 1.3.5.1. Your Question (mandatory)
// This text input should be a large text window allowing up to 1000 characters.
// 1.3.5.2. What is your nickname (mandatory)
// A text input allowing up to 60 characters for the user’s display name.
// Placeholder text should read: “Example: jackson11!”.
// Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
// 1.3.5.3. Your email (mandatory)
// A text input allowing up to 60 characters.
// Placeholder text should read: “Why did you like the product or not?”.
// Below this field, the text “For authentication reasons, you will not be emailed” will appear.
// 1.3.5.4. Submit question (button)
// A button by which the question can be submitted.
// Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
// This error will occur if :
// Any mandatory fields are blank
// The email address provided is not in correct email format
