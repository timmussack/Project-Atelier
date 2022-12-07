import React from 'react';

const PhotoModal = ({ url, zoom, setZoom }) => {

  if (zoom) {
    return (
      <div>
        <div>
          <img src={url} onClick={() => setZoom(!zoom)}/>
        </div>
        <button onClick={() => setZoom(!zoom)}>Close Photo</button>
      </div>
    );
  }
};

export default PhotoModal;
