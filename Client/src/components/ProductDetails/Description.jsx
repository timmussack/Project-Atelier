import React from 'react';
import styled from 'styled-components'

const Description = ({ productData }) => {

  const DataContainer = styled.div`
    position:relative ;
    background-color: yellow;
    width: 75%;
    max-width: 900px;
    margin: 0 auto;

  `

  return (
   <DataContainer>
    <h3>{productData.slogan}</h3>
    <p>{productData.description}</p>
   </DataContainer>
  )
}

export default Description;