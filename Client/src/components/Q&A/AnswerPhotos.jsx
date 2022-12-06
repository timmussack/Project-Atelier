import React, { useState } from 'react';


export default function AnswerPhotos({photos}) {
  const [zoom, setZoom] = useState(false);

  if (photos.length) {
    return (
      <>
      {photos.map((photo, index) => {
        return <img
        src={photo.url}
        key={index}
        height='100px'
        width='150px'
        />
      })}
      </>
    )
  }
};