import React, { useState } from 'react';
import PhotoModal from './modals/PhotoModal.jsx';

const ReviewPhotos = ({photos}) => {
  const [zoom, setZoom] = useState(false);

  if (photos.length) {
    return (
      <>
      {photos.map((photo, index) => {
        return <img
        src={photo.url}
        key={index}
        height='50px'
        width='100px'
        />
      })}
      </>
    )
  }
};

export default ReviewPhotos;
