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
  border: 1px solid;
  width: 50%;
  border-radius: 10px;
`;

const ModalButton = styled.button`
  font-family: 'Jost', sans-serif;
  background-color: white;
  color: black;
  border: 2px solid;
  height: 40px;
  width: 20%;
  margin: 10px 10px 10px 0px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: black 3px 1px 5px;
`;

const ModalForm = styled.form`
  overflow: auto;
  margin-left: 7.5%;
`;

const Note = styled.p`
  font-size: 12px;
`;

export default function AnswerModal({ productData, product, showAModal, setShowAModal, QA, getAnswers, nightMode }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState([]);

  const handleAddAnswer = (answer, nickname, email, imageURL, questionId) => {
    axios.post('/qa/questions/:question_id/answers', {
      body: answer,
      name: nickname,
      email: email,
      photos: imageURL,
      questionId: questionId
    })
    .then((response) => {
      getAnswers(QA.question_id)
    })
    .catch((error) => {
      console.log('Error in QuestionModal', error);
    })
  };

  const getBase64 = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };

  const uploadPhoto = async (file) => {
      const base64File = await getBase64(file);
      const data = new FormData();
      data.append('file', base64File);
      data.append('upload_preset', 'SYNTHETIC')
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfxzjeut8/image/upload",
        {
         method: "Post",
         body: data,
        }
      );
      const response = await res.json();
      setImageURL([...imageURL, response.secure_url]);
  };

  let modalContent;

  if (showAModal) {
    modalContent = (
      <AModal>

        <AModalContent style={nightMode ? {backgroundColor: 'lightslategray'} : {backgroundColor: 'white'}}>

          <h3 style={{'margin-left': '7.5%'}}>Submit your answer</h3>

          <h5 style={{'margin-left': '7.5%'}}>{productData.name}: {QA.question_body}</h5>

          <ModalForm onSubmit={() => {
              handleAddAnswer(answer, nickname, email, imageURL, QA.question_id);
              setAnswer('');
              setShowAModal(!showAModal);
            }}>

            <label>
              <div> Your Answer* </div>
              <textarea maxLength='1000' type='text' value={answer} style={{width: '90%', height: '100px'}} onChange={e => {
              setAnswer(e.target.value)
              }} required> </textarea>
            </label>

            <label>
              <div style={{marginTop: '10px'}}> What is your nickname* </div>
              <input maxLength='60' type='text' style={{width: '90%', height: '15px'}} placeholder='Example: jack543!' onChange={e => {
              setNickname(e.target.value)
              }} required/>
            </label>

            <Note>For privacy reasons, do not use your full name or email address.</Note>

            <label>
              <div> Your email* </div>
              <input maxLength='60' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$' style={{width: '90%', height: '15px'}} placeholder='Example: jack@email.com' onChange={e => {
              setEmail(e.target.value)
              }} required/>
            </label>

            <Note>For authentication reasons, you will not be emailed.</Note>

            <label>
            <div> You can upload up to 5 images </div>
              <input type='file' name='files[]' accept="image/png, image/jpeg" style={{width: '90%'}} onChange={event => {
              uploadPhoto(URL.createObjectURL(event.target.files[0]));
              }} />
              <input type='file' name='files[]' accept="image/png, image/jpeg" style={{width: '90%'}} onChange={event => {
              uploadPhoto(URL.createObjectURL(event.target.files[0]));
              }} />
              <input type='file' name='files[]' accept="image/png, image/jpeg" style={{width: '90%'}} onChange={event => {
              uploadPhoto(URL.createObjectURL(event.target.files[0]));
              }} />
              <input type='file' name='files[]' accept="image/png, image/jpeg" style={{width: '90%'}} onChange={event => {
              uploadPhoto(URL.createObjectURL(event.target.files[0]));
              }} />
              <input type='file' name='files[]' accept="image/png, image/jpeg" style={{width: '90%'}} onChange={event => {
              uploadPhoto(URL.createObjectURL(event.target.files[0]));
              }} />
            </label>

            <div>
              <ModalButton type='submit'> Submit </ModalButton>

              <ModalButton onClick={() => {
                setShowAModal(!showAModal)
              }}> Close </ModalButton>

            </div>

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
