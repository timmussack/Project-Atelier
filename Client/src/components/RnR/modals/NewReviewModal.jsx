import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const RModal = styled.div`
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

const RModalContent = styled.div`
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

export default function NewReviewModal({ showAddReview, setShowAddReview, product, productData }) {
  const [userReview, setUserReview] = useState('');
  const [reccomend, setReccomend] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  if (showAddReview) {
    return (
      <RModal>
        <RModalContent>
          <h2>Write Your Review</h2>
          <h3>About the {productData.name}</h3>
          <form>
            <label>Overall Rating</label>

            <label>Do you recommend this product?*
              <ModalButton onClick={() => setReccomend(true)}>Yes</ModalButton>
              <ModalButton onClick={() => setReccomend(false)}>No</ModalButton>
            </label>

            <label>Review Summary
              <input size="60" placeholder="Example: Best Purchase Ever!"/>
            </label>

            <label required>Review Body
              <input size="1000" placeholder="Why did you like the product or not?" onChange={e => setUserReview(e.target.value)}/>
            </label>

            <label>Upload Your Photos

            </label>

            <label required>Your Nickname
              <input size="60" placeholder="Example: jackson11!" onChange={e => setNickname(e.target.value)}/>
            </label>

            <label required>Your Email
              <input size="60" placeholder="Example: jackson11@email.com" onChange={e => setEmail(e.target.value)}/>
            </label>


          </form>
          <ModalButton onClick={() => setShowAddReview(!showAddReview)}>Submit Question</ModalButton>
         </RModalContent>
      </RModal>
    )
  } else {
    return (
      <>
      </>
    )
  }
};
