import React from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
position:relative ;
width: 75%;
max-width: 900px;
margin: 0 auto;

`

const Description = ({ productData }) => {

  return (
   <DataContainer data-testid='description_container'>
    <h3 data-testid='slogan'>{productData.slogan}</h3>
    <p data-testid='description'>{productData.description}</p>
   </DataContainer>
  )
}

export default Description;