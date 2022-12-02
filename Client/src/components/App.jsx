import axios from 'axios';
import QA from './Q&A/QAContainer.jsx';
import * as React from 'react';
import Ratings from './RnR/ratings.jsx';
import MainView from './ProductDetails/MainView.jsx'

const { useState, useEffect } = React;

export default function App() {
  const [rating, setRating] = useState(3);
  const [stars, setStars] = useState([]);
  const [product, setProduct] = useState(37311);
  const [productData, setProductData] = useState({});
  const [metaData, setMetaData] = useState({});


  // need to change to use data from get request on page load
  // set state of product rating
  // invoke this function in useeffect
  const createStars = (productRating) => {
    const result = [];
    let count = 0;
    const roundedRating = (Math.round(productRating * 4) / 4).toFixed(2);

    while (count < 5) {
      if (roundedRating >= 1) {
        result.push('placeholder for fullstar image');
        count++;
      } else if (roundedRating === 0.5) {
        result.push('placeholder for halfstar image');
        count++;
      } else {
        result.push('placeholder for emptystar image');
        count++;
      }
    }
    return result;
  };

  const getProductData = (productId) => {
    axios.get('/products/:product_id', {
      params: {
        'id': productId
      },
    })
    .then((response) => {
      setStars(createStars(rating));
      let newProduct = response.data
      setProductData(newProduct)
    })
    .catch((error) => {
      console.log('Error in client from get request', error);
    });
  }


  const getReviewMeta = (productId) => {
    axios.get('/reviews/meta', {
      params: {
        'id': productId
      },
    })
    .then((response) => {
      console.log('Succesful request for meta data');
      setMetaData(response.data);
    })
    .catch((error) => {
      console.log('Error in client from get request', error);
    });
  }


  useEffect(() => {
    getProductData(product)
    getReviewMeta(product)
    //getreviews
    //get question stuff
  }, []);

  return (
    <div id= 'app'>
      <MainView
        product={product}
        productData={productData}
        reviewMeta={metaData} />

      <QA product={product} />

      <Ratings stars={stars} rating={rating} />
    </div>
  );
}
