import {React, useState} from 'react';
import styled from 'styled-components';

const Dropdown = ({ currentStyle }) => {
  const [sizeValue, setSizeValue] = useState('');
  const [qtyValue, setQtyValue] = useState('1');

  const handleSizeChange = (e) => {
    setSizeValue(e.target.value)
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
      <div className="Dropdown">
        <select form="addtocartform" id="sizedropdown" value={sizeValue} onChange={(e) => handleSizeChange(e)}>
          <option value="default">SELECT A SIZE</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <select form="addtocartform" id="qtydropdown" value={qtyValue} onChange={(e) => handleQtyChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <form onClick={addToCart} id="addtocartform">
          <StyledAddToCart>Add To Cart</StyledAddToCart>
        </form>
      </div>
  )
}

export default Dropdown;