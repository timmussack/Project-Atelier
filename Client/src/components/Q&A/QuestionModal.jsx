import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const QModal = styled.div`
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

const QModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  width: 50%;
`;

const ModalButton = styled.button`
  background-color: #253954;
  color: white;
  border: 1px solid;
  height: 40px;
  width: 20%;
  margin-right: 20px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const ModalForm = styled.form`
  overflow: auto;
`;

const Note = styled.p`
  font-size: 12px;
`;

export default function QuestionModal({ productData, product, showQModal, setShowQModal, getQAs }) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleAddQuestion = (question, nickname, email, product) => {
    axios.post('/qa/questions', {
      body: question,
      name: nickname,
      email: email,
      product_id: product
    })
      .then((result) => {
        getQAs(product);
      })
      .catch((error) => {
        console.log('Error in QuestionModal', error);
      })
  };

  let modalContent;

  if (showQModal) {
    modalContent = (
      <QModal>

        <QModalContent>

          <h3>Ask Your Question</h3>

          <p>About the {productData.name}</p>

          <ModalForm onSubmit={(e) => {
            e.preventDefault();
            handleAddQuestion(question, nickname, email, product);
            setQuestion('');
            setShowQModal(!showQModal);
          }}>

            <label>
              <div> Your question* </div>
              <textarea maxLength='1000' type='text' value={question} style={{width: '90%', height: '200px'}} onChange={e => {
              setQuestion(e.target.value)
              }} required> </textarea>
            </label>

            <label>
              <div> What is your nickname* </div>
              <input maxLength='60' type='text' style={{width: '90%', height: '15px'}} placeholder='Example: jackson11!' onChange={e => {
              setNickname(e.target.value)
              }} required/>
            </label>

            <Note>For privacy reasons, do not use your full name or email address.</Note>

            <label required>
              <div> Your email* </div>
              <input maxLength='60' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$' style={{width: '90%', height: '15px'}} placeholder='Example: jack@email.com' onChange={e => {
              setEmail(e.target.value)
              }} required/>
            </label>

            <Note>For authentication reasons, you will not be emailed.</Note>

          <ModalButton type="submit">Submit Question</ModalButton>

          <ModalButton onClick={() => {
            setShowQModal(!showQModal)
          }}>Close without submission</ModalButton>

        </ModalForm>

        </QModalContent>

      </QModal>
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
