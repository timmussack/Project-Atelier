import react from 'react';
import styled from 'styled-components';


const ATCModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 25vh;
  width: 0px;
  right: 0px;
  overflow: auto;
  transition: width 1.5s ease-in-out 0s;
  box-shadow: black 3px 1px 5px;
`;

const ATCContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid;
  width: 550px;
  height: 25vh;
  border-radius: 10px;
  /* transition: width 2s ease-in-out 0s; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 5px;
`

const StyledTitle = styled.h1`
  font-size: xx-large;
`

const CartImage = styled.img`
  width: 120px;
  height: 120px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const Divider = styled.div`
  border-left: 3px solid black;
  height: inherit;
  margin-left: 30px;
  margin-right: 26px;
`
const TotalCostContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const TotalProductCost = styled.div`
  display: flex;
  column-gap: 50px;
  flex-flow: row wrap;
`

const TotalDeliveryCost = styled.div`
  display: flex;
  column-gap: 50px;
`
const TotalCost = styled.div`
  display: flex;
  justify-content: space-between;
`

const AddToCartModal = ({ addedToCart, currentStyle, sizeValue, qtyValue, sizeObj }) => {

  return (
  <>
    { currentStyle.photos &&
      <ATCModal id={addedToCart ? 'atcwidth' : ''}>
        <ATCContent >
        <StyledTitle>SUCCESFULLY ADDED TO BAG!</StyledTitle>
          <ContentContainer>
            <CartImage src={currentStyle.photos[0].thumbnail_url}/>
            <DetailContainer>
              <strong>{currentStyle.name}</strong>
              <a>${currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price}</a>
              <a>Size: {sizeValue && currentStyle.skus[sizeValue]['size']}</a>
              <a>Quantity: {qtyValue === 'default' ? '1' : qtyValue}</a>
            </DetailContainer>
            <Divider/>
            <TotalCostContainer>
              <a>Your Bag</a>
              <a>
                <strong>{qtyValue === 'default' ? '1 ' : qtyValue + ' '} </strong>items
              </a>
              <TotalProductCost>
                <a>Total Product Cost:</a>
                <a>${currentStyle.original_price * (qtyValue === 'default' ? '1' : qtyValue)}</a>
              </TotalProductCost>
              <TotalDeliveryCost>
                  <a>Total Delivery Cost:</a>
                  <a>Free</a>
                </TotalDeliveryCost>
                <hr style={{color: 'black', backgroundColor: 'black', height: '3px', width: '100%'}}></hr>
                <TotalCost>
                  <strong>Total:</strong>
                  <strong>${currentStyle.original_price * (qtyValue === 'default' ? '1' : qtyValue)}</strong>
                </TotalCost>
            </TotalCostContainer>
          </ContentContainer>
        </ATCContent>
      </ATCModal>
    }
  </>

  )
}

export default AddToCartModal;