import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';


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
            return <img
            style={{maxWidth: "130px", marginRight: "16px", border: "1px solid", marginBottom: "19px"}}
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