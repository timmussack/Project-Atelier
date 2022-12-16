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
  border: 2px solid;
  width: 50%;
  border-radius: 10px;
`;

const ModalButton = styled.button`
  font-family: 'Jost', sans-serif;
  border: 2px solid #253954;;
  height: 40px;
  width: 20%;
  margin: 10px 4px 10px 6px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
  :hover { transform: scale(1.05); }
  transition: transform 250ms;
`;

const ModalForm = styled.form`
  margin-left: 7.5%;
  overflow: auto;
`;

const Note = styled.p`
  font-size: 12px;
`;

export default function QuestionModal({ productData, product, showQModal, setShowQModal, getQAs, nightMode }) {
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

        <QModalContent style={nightMode ? {backgroundColor: '#404258'} : {backgroundColor: 'white'}}>

          <h3 style={{'margin-left': '7.5%'}}>Ask Your Question</h3>

          <h5 style={{'margin-left': '7.5%'}}>About the {productData.name}</h5>

          <ModalForm onSubmit={(e) => {
            e.preventDefault();
            handleAddQuestion(question, nickname, email, product);
            setQuestion('');
            setShowQModal(!showQModal);
          }}>

            <label>
              <div> Your question* </div>
              <textarea maxLength='1000' type='text' value={question} style={{width: '90%', height: '50px'}} onChange={e => {
              setQuestion(e.target.value)
              }} required> </textarea>
            </label>
            <br></br>
            <label>
              <div style={{marginTop: '10px'}}> What is your nickname* </div>
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

            <ModalButton style={nightMode ? {backgroundColor: '#253954', color: '#DCD7C9'} : {backgroundColor: 'white', color: 'black'}} type="submit"> Submit </ModalButton>

            <ModalButton style={nightMode ? {backgroundColor: '#253954', color: '#DCD7C9'} : {backgroundColor: 'white', color: 'black'}} onClick={() => {
            setShowQModal(!showQModal)
            }}> Close </ModalButton>

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
