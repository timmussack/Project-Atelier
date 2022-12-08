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
  const [photos, setPhotos] = useState([]);


  if (showAddReview) {
    return (
      <RModal>
        <RModalContent>
          <h2>Write Your Review</h2>
          <h3>About the {productData.name}</h3>
          <form method="post">
            <label>Overall Rating</label>

            <label>Do you recommend this product?
              <ModalButton>
                <input required type="radio" name="yesNo" value="yes" onClick={() => setReccomend(true)}/>Yes
              </ModalButton>
              <ModalButton>
                <input required type="radio" name="yesNo" value="no" onClick={() => setReccomend(false)}/>No
              </ModalButton>
            </label>

            <br></br>

            <label required>Review Summary
              <br></br>
              <input type="text" required maxLength="60" placeholder="Example: Best Purchase Ever!"/>
            </label>

            <br></br>

            <label>Review Body
              <input type="text" size="200" maxLength="1000" style={{height: '100px'}} placeholder="Why did you like the product or not?" onChange={e => setUserReview(e.target.value)} required/>
            </label>
            {userReview.length < 50 ? (
              <p id="review-counter">Minimum required characters left: {50-userReview.length}</p>
            ) : (
              <p id="review-counter">Minimum reached</p>
            ) }

            <br></br>

            <label>Upload Your Photos
              <input type="file" name="images" multiple/>
            </label>

            <br></br>

            <label>Your Nickname
              <input type="text" maxLength="60" placeholder="Example: jackson11!" onChange={e => setNickname(e.target.value)} required/>
              <p>For privacy reasons, do not use your full name or email address</p>
            </label>

            <br></br>

            <label>Your Email
              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" maxLength="60" placeholder="Example: jackson11@email.com" onChange={e => setEmail(e.target.value)} required/>
              <p>For authentication reasons, you will not be emailed</p>
            </label>

          <ModalButton type="submit" onSubmit={() => setShowAddReview(!showAddReview)}>Submit Review</ModalButton>
          <ModalButton type="submit" onClick={() => setShowAddReview(!showAddReview)}>Cancel Review</ModalButton>
          </form>
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
