import styled, { css } from 'styled-components';

export const RModal = styled.div`
  display: flex;
  margin-top: 2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

export const RModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px 10px 20px 20px;
  border: 1px solid black;
  width: 50%;
  height: 80%;
`;

export const ModalButton = styled.button`
  font-family: 'Jost',sans-serif;
  background-color: white;
  color: black;
  border: 2px solid;
  height: 40px;
  width: 20%;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: black 3px 1px 5px;
  font-weight: 700;
  transition: all 0.2s ease;
  &:active {
    box-shadow: 0 0 2px darkslategray;
    transform: translateY(2px);
  }
`;

export const ModalSubmitButton = styled.input`
  font-family: 'Jost',sans-serif;
  background-color: white;
  color: black;
  border: 2px solid;
  height: 40px;
  width: 20%;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: black 3px 1px 5px;
  font-weight: 700;
  transition: all 0.2s ease;
  &:active {
    box-shadow: 0 0 2px darkslategray;
    transform: translateY(2px);
  }
`;
export const ModalForm = styled.form`
  overflow: auto;
  height: 100%;
`;

export const ModalTitles = styled.div`
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CharButtons = styled.button`
  font-family: Jost;
  background-color: white;
  border: 2px solid;
  border-radius: 50%;
  color: black;
  width: 50px;
  height: 50px;
  box-shadow: black 3px 1px 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  margin: 4px 41px 4px 4px;
  transition: all 0.2s ease;
  &:active {
    box-shadow: 0 0 2px darkslategray;
    transform: translateY(2px);
  };
`;

export const CharContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const ImageInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

export const ImageLabel = styled.label`
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  height: 40px;
  border: 2px solid;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0px 15px;
  cursor: pointer;
  box-shadow: black 3px 1px 5px;
`;


// photo modal

export const PhotoModalBG = styled.div`
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

export const LargePhoto = styled.div`
  margin: auto;
  display: block;
  width: auto;
  height: auto;
  max-width: 500px;
`;

export const ClosePictureButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

export const ZoomPhoto = styled.img`
  height: 100%;
  width: 100%;
  justify-content: center;
`;