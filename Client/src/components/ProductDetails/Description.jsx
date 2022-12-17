import React from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
position:relative ;
align-self: center
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