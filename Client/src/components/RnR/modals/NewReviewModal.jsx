import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { RModal, RModalContent, ModalButton, ModalSubmitButton, ModalForm, ModalTitles } from './ModalStyling';
import { CharButtons, CharContainer } from './ModalStyling';
import { ImageLabel, ImageInput } from './ModalStyling';

import axios from 'axios';
import Stars from '../Stars.jsx'
import NewReviewThumbnail from './NewReviewThumbnail.jsx';

export default function NewReviewModal({ showAddReview, metaData, setShowAddReview, product, productData }) {
  const [userReview, setUserReview] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reccomend, setReccomend] = useState(false);
  const [nickname, setNickname] = useState('');
  const [summary, setSummary] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [chars, setChars] = useState({});
  const [thumbnails, setThumbnails] = useState([]);

  const characteristicsHandler = (characteristic, id) => {
    return (
      <>
      <ModalTitles>Describe the {characteristic.toLowerCase()}</ModalTitles>
      <CharContainer>
        {[1, 2, 3, 4 ,5].map((num, index) => {
          return (
              <CharButtons key={index} onClick={(e) => {
                let newCharObj = chars;
                newCharObj[id.toString()] = num
                setChars(newCharObj)
                console.log(chars)
              }}>
                <input type="radio" name='characteristics' value={num}/>{num}
              </CharButtons>
          )
        })}
      </CharContainer>
      </>
    )
  }

  const postReviewHandler = (response) => {
    console.log('post', chars)
    let newPhotos = [];
    const newUrlArr = response.forEach(object => newPhotos.push(object.Location));
    axios.post('/reviews', {
      product_id: product,
      body: userReview,
      characteristics: chars,
      rating: reviewRating,
      recommend: reccomend,
      name: nickname,
      summary: summary,
      email: email,
      photos: newPhotos,
    })
    .then((res) => {
      console.log('success', res);
    })
    setShowAddReview(!showAddReview);
  };

  const thumbnailHandler = (file) => {
    console.log(productData)
    let url = URL.createObjectURL(file);
    let tempArr = thumbnails;
    tempArr.push(url);
    setThumbnails(tempArr);
  }

  const fileChangeHandler = async (e) => {
    let url = URL.createObjectURL(e.target.files[0]);

    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader;
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        let newPhotos = photos;
        newPhotos.push(base64data);
        setPhotos(newPhotos);
        resolve(photos);
      };
    })
  };

  const photoUploadHandler = async (e) => {
    e.preventDefault();
    let submittedForm = new FormData(e.target);
    submittedForm.append('images', photos);
    const res = await fetch(
      'http://localhost:3000/photoUpload',
      {
        method: "POST",
        body: submittedForm,
      }
    )

    const photoUrls = await res.json();
    return await photoUrls;
  }

  if (showAddReview) {
    return (
      <RModal>
        <RModalContent>
          <ModalForm enctype="multipart/form-data" onSubmit={(e) => {
            photoUploadHandler(e).then((response) => postReviewHandler(response)).then(() => setShowAddReview(!showAddReview));
          }}>
          <h1>Write Your Review</h1>
          <h3>About the {productData.name}</h3>

            <label>
            <ModalTitles>Overall Rating</ModalTitles>
            <Stars rating={reviewRating} selectable={true} setReviewRating={setReviewRating} />
            </label>

            <label>
              <ModalTitles>Would You Reccomend This Product?</ModalTitles>
              <ModalButton>
                <input required type="radio" value="yes" onClick={() => setReccomend(true)}/>Yes
              </ModalButton>
              <ModalButton>
                <input required type="radio" value="no" onClick={() => setReccomend(false)}/>No
              </ModalButton>
            </label>


              {Object.keys(metaData.characteristics).map((characteristic) =>
                characteristicsHandler(characteristic, metaData.characteristics[characteristic].id)
              )}

            <label>
              <ModalTitles>Summary</ModalTitles>
              <input name="summary" onChange={e => setSummary(e.target.value)} type="text" required maxLength="60" size="50" placeholder="Example: Best Purchase Ever!"/>
            </label>

            <label>
              <ModalTitles>Body</ModalTitles>
              <input type="text" name="body" size="200" maxLength="1000" style={{height: '100px', width: '90%'}} placeholder="Why did you like the product or not?" onChange={e => setUserReview(e.target.value)} required/>
              {userReview.length < 50 ? (
                <p id="review-counter" style={{fontSize: '12px'}}>Minimum required characters left: {50-userReview.length}</p>
              ) : (
                <p id="review-counter" style={{fontSize: '12px'}}>Minimum reached</p>
              ) }
            </label>

            <ModalTitles>Upload Your Photos</ModalTitles>
            <ImageLabel style={{backgroundColor: 'white', color: 'black'}}>Click Here to Upload!
              <ImageInput type="file" name="images" accept="image/*" multiple onChange={(e) => {fileChangeHandler(e)}}/>
            </ImageLabel>
            <NewReviewThumbnail thumbnails={thumbnails} setThumbnails={setThumbnails} onChange={(e) => thumbnailHandler(e.target.files[0])}/>

            <label>
              <ModalTitles>Your Nickname</ModalTitles>
              <input id='img1' name="name" type="text" maxLength="60" placeholder="Example: jackson11!" onChange={e => setNickname(e.target.value)} required/>
              <p style={{fontSize: '12px'}}>For privacy reasons, do not use your full name or email address</p>
            </label>

            <label>
              <ModalTitles>Your E-mail</ModalTitles>
              <input name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" maxLength="60" placeholder="Example: jackson11@email.com" onChange={e => setEmail(e.target.value)} required/>
              <p style={{fontSize: '12px'}}>For authentication reasons, you will not be emailed</p>
            </label>

            <ModalSubmitButton type="submit" value="Submit Review" name="submit"/>
            <ModalButton onClick={() => setShowAddReview(!showAddReview)}>Cancel Review</ModalButton>
          </ModalForm>
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
