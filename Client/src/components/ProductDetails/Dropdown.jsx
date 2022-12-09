import {React, useState, useEffect} from 'react';
import styled from 'styled-components';

const Dropdown = ({ currentStyle }) => {
  const [sizeValue, setSizeValue] = useState('');
  const [qtyValue, setQtyValue] = useState('1');
  const [sizeObj, setSizeObj] = useState({});
  const [qtyLength, setQtylength] = useState([]);

  const handleSizeChange = (e) => {
    setSizeValue(e.target.value);
    let sizeLength = sizeObj[e.target.value].quantity;
    if (sizeLength > 15) {
      setQtylength(Array.from({length: 15}, (_, i) => i + 1));
      setQtyValue('1')
    } else {
      setQtylength(Array.from({length: sizeLength}, (_, i) => i + 1));
      setQtyValue('1');
    }


  }
  const handleQtyChange = (e) => {
    setQtyValue(e.target.value)
  }
  const addToCart = (event) => {
    event.preventDefault();
    console.log('Add to cart triggered');
    console.log('size:', sizeValue);
    console.log('qty:', qtyValue);
  }


  const createSizeObj = () => {
    let obj = {};
    for(const [key, value] of Object.entries(currentStyle.skus)) {
      if (value.quantity > 0) {
        obj[key] = value;
      }
    }
    setSizeObj(obj)
  }


  useEffect(() => {
    if (Object.keys(currentStyle).length > 0 ) {
      createSizeObj()
    }
  }, [currentStyle])

  const StyledAddToCart = styled.button`
    color: black;
    width: inherit;
    height: inherit;
    background-color: transparent;
    border-color: black
    font-size: 1em;
    padding: 0.25em 1em;
  `;


  return (
  <>
    { Object.keys(sizeObj).length > 0 &&
      <div className="Dropdown">
        <select form="addtocartform" id="sizedropdown" value={sizeValue} onChange={(e) => handleSizeChange(e)}>
          <option value="default">Select Size</option>
          {
            Object.keys(sizeObj).map((sku, index) => {
              return (
                <option value={sku}>{sizeObj[sku].size}</option>
              )
            })
          }
        </select>
        <select form="addtocartform" id="qtydropdown" value={qtyValue} onChange={(e) => handleQtyChange(e)}>
        {
          qtyLength.map((number, index) => {
            return <option key={index} value={number}>{number}</option>
          })
        }
        </select>
        <form onClick={addToCart} id="addtocartform">
          <StyledAddToCart>Add To Cart</StyledAddToCart>
        </form>
      </div>
    }
  </>
  )
}

export default Dropdown;