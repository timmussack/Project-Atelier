import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductImage from './ProductImage.jsx';
import Description from './Description.jsx';



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


const MainView = ({ product, productData, reviewMeta, rating}) => {
  const [styles, setStyles] = useState([]);
  const [defaultStyle, setDefaultStyle] = useState({});
  const [reviews, setReviews] = useState([]);




  const listen = (e) => {
    const clickTime = new Date();
    axios.post('/interactions', {
      element: e.target.outerHTML,
      time: clickTime,
      widget: 'Product Overview'
    })
      .then((response) => {
      })
      .catch((error) => {
        console.log(error, 'Error in client from Product Overview interaction post request');
      });
  }


  const getStyles = (id) => {
    axios.get('/products/:product_id/styles', {
      params: {
        'id': id
      }
    })
      .then((response) => {
        // console.log(response.data.results);
        setStyles(response.data.results);
        setDefaultStyle(response.data.results[0])
      })
      .catch((err) => {console.log(err)})
  }

  const getReviews = () => {
    axios.get('/reviews', {
      params: {
        product_id: product,
        count: 100,
      }
    })
      .then(response => {
        setReviews(response.data.results)
      })
      .catch(err => err);
  };


  useEffect(() => {
    getStyles(product)
    getReviews()
    let element = document.getElementsByClassName('mainView');
    element[0].addEventListener('click', listen, true)
  }, [])



  return (
    <div className="mainView" data-testid='test_mainview'>
      <ProductImage data-testid='productimagetest'
        productData={productData}
        styles={styles}
        defaultStyle={defaultStyle}
        rating={rating}
        reviews={reviews}
        />
      <Description data-testid='descriptiontest'
        productData={productData} />

    </div>
  )
}

export default MainView;