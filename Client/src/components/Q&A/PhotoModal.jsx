import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';

const { useState, useEffect } = react;

const PModal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const PModalContent = styled.div`
  margin: auto;
  display: block;
  /* position: absolute;
  left: 50%;
  top: 50%; */
  width: auto;
  height: auto;
  max-width: 700px;
`;

const ModalButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

const ZoomPhoto = styled.img`
  //position: relative
`;


export default function PhotoModal({ url, showPModal, setShowPModal }) {

  let modalContent;

  if (showPModal) {
    modalContent = (
      <PModal>
        <PModalContent>
          <ZoomPhoto
            src={url}
            height='500px'
            width='750px'
            //image-resolution= 'from-image'
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
  }

  return (
    <>
      {modalContent}
    </>
  )

};