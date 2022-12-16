import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddToCartModal from './AddToCartModal.jsx';

const StyledAddToCart = styled.button`
width: inherit;
height: 65px;
font-size: 1em;
padding: 0.25em 1em;
background-color: white;
color: black;
border: 1px solid;
border-radius: 10px;
box-shadow: black 3px 1px 5px;
cursor: pointer;
font-weight: 700;
`;

const StyledError = styled.strong`
color: red;
margin-left: 22px;
font-size: smaller;
`

const Dropdown = ({ currentStyle }) => {
  const [sizeValue, setSizeValue] = useState('');
  const [qtyValue, setQtyValue] = useState('default');
  const [sizeObj, setSizeObj] = useState({});
  const [qtyLength, setQtylength] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);


  const handleSizeChange = (e) => {
    if (e.target.value === "default") {
      setSizeValue('');
      alert('size changed')
      return;
    }
    document.getElementById('sizedropdown').removeAttribute('size');
    setErrorMessage('')
    setSizeValue(e.target.value);
    let sizeLength = sizeObj[e.target.value].quantity;
    if (sizeLength > 15) {
      setQtylength(Array.from({length: 15}, (_, i) => i + 1));
    } else {
      setQtylength(Array.from({length: sizeLength}, (_, i) => i + 1));
    }
  }

  const handleQtyChange = (e) => {
    setQtyValue(e.target.value)
  }

  const addToCart = (event) => {
    event.preventDefault();
    if (sizeValue === '') {
      let element = document.getElementById('sizedropdown')
      setErrorMessage('Please select size')
      element.setAttribute('size', Object.keys(sizeObj).length);
      element.focus()
    } else {
      axios({
        method: 'post',
        url: `/cart`,
        data: {
          sku_id: sizeValue
        }
      })
        .then((response) => {
          setAddedToCart(true);
          setTimeout(() => {
            setSizeValue('');
            setQtyValue('default');
            // setAddedToCart(false)
          }, 5000)
          console.log('Succesfuly Add To Cart')
        })
        .catch((err) => console.log('error in atc', err.response.data.message))
    }
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

  const disabled = () => {
    return !sizeValue.length > 0 ? true : false
  }


  useEffect(() => {
    if (Object.keys(currentStyle).length > 0 ) {
      createSizeObj();
      setSizeValue('');
      setQtyValue('default');
    }
  }, [currentStyle])


  return (
  <>

      <AddToCartModal
        addedToCart={addedToCart}
        currentStyle={currentStyle}
        sizeValue={sizeValue}
        qtyValue={qtyValue}
        sizeObj={sizeObj}
      />

      <StyledError data-testid='errortest'>{errorMessage}</StyledError>
    { (currentStyle.original_price || Object.keys(sizeObj).length > 0) &&
      <div className="Dropdown" data-testid="dropdowntest">
        <select data-testid='sizedropdowntest' form="addtocartform" id="sizedropdown" value={sizeValue} onChange={(e) => handleSizeChange(e)}>
          {
            <option data-testid='optiontest' value="default">Select Size</option>
          }
          {
            Object.keys(sizeObj).map((sku, index) => {
              return (
                <option data-testid='optiontest' key={index} value={sku}>{sizeObj[sku].size}</option>
              )
            })
          }
        </select>


        <select form="addtocartform" id="qtydropdown" value={qtyValue} onChange={(e) => handleQtyChange(e)} disabled={disabled()}  >
          {
            disabled() ? <option data-tesid="qtyopt" value="default" >-</option> : null
          }

        {
          qtyLength.map((number, index) => {
            return <option data-tesid="qtyopt" key={index} value={number}>{number}</option>
          })
        }
        </select>
        <form onClick={addToCart} id="addtocartform">
          <StyledAddToCart data-testid='atcbutton'>Add To Cart</StyledAddToCart>
        </form>
      </div>
    }
  </>
  )
}

export default Dropdown;