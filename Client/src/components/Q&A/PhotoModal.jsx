import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const PModal = styled.div`
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

const PModalContent = styled.div`
  margin: auto;
  display: block;
  width: auto;
  height: auto;
  max-width: 700px;
`;

const ModalButton = styled.span`
  position: absolute;
  top: 70px;
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
  box-shadow: 3px 1px 5px black;
`;

export default function PhotoModal({ url, showPModal, setShowPModal }) {

  let modalContent;

  if (showPModal) {
    modalContent = (
      <PModal>
        <PModalContent>
          <ZoomPhoto
            src={url}
            image-resolution= 'from-image'
            />

          <ModalButton onClick={() => {
            setShowPModal(false);
          }}>&times;</ModalButton>

        </PModalContent>
      </PModal>
    );
  } else {
    modalContent = (
      <>
      </>
    )
  };

  return (
    <>
      {modalContent}
    </>
  )
};