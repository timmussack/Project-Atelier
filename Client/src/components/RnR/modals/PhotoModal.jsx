import React from 'react';
import styled, { css } from 'styled-components';

const ModalBG = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const LargePhoto = styled.div`
  margin: auto;
  display: block;
  width: auto;
  height: auto;
  max-width: 500px;
`;

const ClosePictureButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

const ZoomPhoto = styled.img`
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const PhotoModal = ({ url, zoom, setZoom }) => {

  if (zoom) {
    return (
      <ModalBG>
        <LargePhoto>
          <ZoomPhoto src={url} onClick={() => setZoom(false)}/>
          <ClosePictureButton onClick={() => setZoom(false)}>&times;</ClosePictureButton>
        </LargePhoto>
      </ModalBG>
    );
  } else {
    return (
      <>
      </>
    )
  }
};

export default PhotoModal;
