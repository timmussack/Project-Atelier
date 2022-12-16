import React from 'react';
import styled, { css } from 'styled-components';
import { PhotoModalBG, LargePhoto, ZoomPhoto, ClosePictureButton } from './ModalStyling';

const PhotoModal = ({ url, zoom, setZoom }) => {

  if (zoom) {
    return (
      <PhotoModalBG>
        <LargePhoto>
          <ZoomPhoto src={url} onClick={() => setZoom(false)}/>
          <ClosePictureButton onClick={() => setZoom(false)}>&times;</ClosePictureButton>
        </LargePhoto>
      </PhotoModalBG>
    );
  } else {
    return (
      <>
      </>
    )
  }
};

export default PhotoModal;
