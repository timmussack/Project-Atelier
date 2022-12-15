import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';
import styled, { css } from 'styled-components';

const Photo = styled.img`
  max-width: 130px;
  margin-right: 16px;
  margin-bottom: 0px;
  cursor: pointer;
  box-shadow: 3px 1px 5px black;
`;

export default function AnswerPhotos({photos, showPModal, setShowPModal}) {
  const [photoUrl, setPhotoUrl] = useState('');

  const handlePhotoClick = (clickedPhoto) => {
    setShowPModal(true)
    setPhotoUrl(clickedPhoto.url)
  };

  if (photos.length) {
    return (
      <>
        <div>
          {photos.map((photo, index) => {
            return <Photo
            onClick={() => handlePhotoClick(photo)}
            src={photo.url}
            key={index}
            height='100%'
            width='100%'
            />
          })}
        </div>

        <PhotoModal showPModal={showPModal} setShowPModal={setShowPModal} url={photoUrl} />
      </>
    )
  };
};