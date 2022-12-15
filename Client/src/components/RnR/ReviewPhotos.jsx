import React, { useState } from 'react';
import PhotoModal from './modals/PhotoModal.jsx';

const ReviewPhotos = ({photos}) => {
  const [zoom, setZoom] = useState(false);
  const [image, setImage] = useState('');

  if (photos.length) {
    return (
      <>
      {photos.map((photo, index) => {
        return <img
        src={photo.url}
        key={index}
        alt={null}
        style={{maxWidth: "130px", marginRight: "16px", border: "1px solid", marginBottom: "19px", boxShadow: 'black 3px 1px 5px'}}
        onClick={() => {
          setImage(photo.url);
          setZoom(true);
        }}
        onError = {e => e.target.style.display = 'none'}
        />
      })}
      <PhotoModal url={image} zoom={zoom} setZoom={setZoom}/>
      </>
    )
  }
};

export default ReviewPhotos;
