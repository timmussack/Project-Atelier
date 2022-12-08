import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductImage from './ProductImage.jsx';
import Description from './Description.jsx'


const MainView = ({ product, productData, reviewMeta, rating}) => {
  const [styles, setStyles] = useState([]);
  const [defaultStyle, setDefaultStyle] = useState({});



  const getStyles = (id) => {
    axios.get('/products/:product_id/styles', {
      params: {
        'id': id
      }
    })
      .then((response) => {
        console.log(response.data.results);
        setStyles(response.data.results);
        setDefaultStyle(response.data.results[0])
      })
      .catch((err) => {console.log(err)})
  }


  useEffect(() => {
    getStyles(product)
  }, [])

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`
const Container = styled.div`
  text-align: center;
`

  return (
    <div className="mainView">
      <ProductImage
        productData={productData}
        styles={styles}
        defaultStyle={defaultStyle}
        rating={rating}
        />
      <Description
        productData={productData} />

    </div>

  )
}

export default MainView;