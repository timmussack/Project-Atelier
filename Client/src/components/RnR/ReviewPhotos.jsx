import React, { useState } from 'react';
import PhotoModal from './modals/PhotoModal.jsx';

const ReviewPhotos = ({photos}) => {
  const [zoom, setZoom] = useState(false);

  if (zoom) {
    return (
      <>
      {photos.map((photo, index) => {
        return <PhotoModal url={photo.url} key={index} zoom={zoom} setZoom={setZoom}/>
      })}
      </>
    )
  } else {
    return (
      <>
      {photos.map((photo, index) => {
        return <img
        src={photo.url}
        key={index}
        height='50px'
        width='100px'
        alt={null}
        />
      })}
      </>
    )
  }
};

export default ReviewPhotos;
