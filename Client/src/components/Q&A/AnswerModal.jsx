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
  padding: 30px;
  border: 1px solid;
  width: 50%;
`;

const ModalButton = styled.button`
  background: transparent;
  border: 1px solid;
  margin-right: 20px;
  margin-top: 10px;
`;

const ModalForm = styled.form`
  overflow: auto;
`;

const Note = styled.p`
  font-size: 12px;
`;

export default function AnswerModal({ productData, product, showAModal, setShowAModal, QA, getAnswers }) {
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

        <AModalContent>

          <h3>Submit your answer</h3>

          <p>{productData.name}: {QA.question_body}</p>

          <ModalForm onSubmit={() => {
              handleAddAnswer(answer, nickname, email, imageURL, QA.question_id);
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
              <ModalButton type='submit'>Submit Answer</ModalButton>

              <ModalButton onClick={() => {
                setShowAModal(!showAModal)
              }}>Close without submission</ModalButton>

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

// import axios from 'axios';
// import * as react from 'react';
// import styled, { css } from 'styled-components';
// import React from 'react';

// const { useState, useEffect } = react;

// const AModal = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0,0,0,0.4);
// `;

// const AModalContent = styled.div`
//   background-color: #fefefe;
//   margin: auto;
//   padding: 20px;
//   border: 1px solid black;
//   width: 50%;
// `;

// const ModalButton = styled.button`
//   background: transparent;
//   border: 1px solid;
//   margin-top: 10px;
//   margin-right: 20px;
// `;

// const ModalForm = styled.form`
//   overflow: auto;
// `;

// const Note = styled.p`
//   font-size: 10px;
// `;

// export default function AnswerModal({ productData, product, showAModal, setShowAModal, QA, getAnswers }) {
//   const [answer, setAnswer] = useState('test');
//   const [nickname, setNickname] = useState('test');
//   const [email, setEmail] = useState('test@email.com');
//   const [imageURL, setImageURL] = useState('');

//   const handleAddAnswer = (answer, nickname, email, imageURL, questionId, file) => {
//     console.log(answer, nickname, email, imageURL, questionId, file);

//     // axios.post('/qa/questions/:question_id/answers', {
//     //   body: answer,
//     //   name: nickname,
//     //   email: email,
//     //   //photos: Need to implement adding photos to an answer
//     //   questionId: questionId
//     // })
//     // .then((response) => {
//     //   getAnswers(QA.question_id)
//     // })
//     // .catch((error) => {
//     //   console.log('Error in QuestionModal', error);
//     // })
//   };

//   const getBase64FromUrl = async (url) => {
//     const data = await fetch(url);
//     const blob = await data.blob();
//     return new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(blob);
//       reader.onloadend = () => {
//         const base64data = reader.result;
//         resolve(base64data);
//       };
//     });
//   };

//   let modalContent;

//   if (showAModal) {
//     modalContent = (
//       <AModal>

//         <AModalContent>

//           <h3>Submit your answer</h3>

//           <p>{productData.name}: {QA.question_body}</p>

//           <ModalForm onSubmit={() => {
//               handleAddAnswer(answer, nickname, email, imageURL, QA.question_id);
//               setAnswer('');
//               setShowAModal(!showAModal);
//             }}>

//             <label>
//               <div> Your Answer* </div>
//               <textarea maxLength='1000' type='text' value={answer} style={{width: '90%', height: '200px'}} onChange={e => {
//               setAnswer(e.target.value)
//               }} required> </textarea>
//             </label>

//             <label>
//               <div> What is your nickname* </div>
//               <input maxLength='60' type='text' style={{width: '90%', height: '15px'}} placeholder='Example: jack543!' onChange={e => {
//               setNickname(e.target.value)
//               }} required/>
//             </label>

//             <label>
//               <div> Your email* </div>
//               <input maxLength='60' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$' style={{width: '90%', height: '15px'}} placeholder='Example: jack@email.com' onChange={e => {
//               setEmail(e.target.value)
//               }} required/>
//             </label>

//             <Note>For privacy reasons, do not use your full name or email address.</Note>

//             <label>
//             <div> Upload an image </div>
//               <input type='file' style={{width: '90%'}} onChange={e => {
//               let file = URL.createObjectURL(event.target.files[0]);
//               file = getBase64FromUrl(file);
//               setImageURL(file);
//               }} multiple/>
//             </label>

//             <ModalButton type='submit'>Submit Answer</ModalButton>

//             <ModalButton onClick={() => {
//               setShowAModal(!showAModal)
//             }}>Close without submission</ModalButton>

//           </ModalForm>

//         </AModalContent>

//       </AModal>
//     );
//   } else {
//     modalContent = (
//       <>
//       </>
//     )
//   };

//   return (
//     <>
//       {modalContent}
//     </>
//   )
// };