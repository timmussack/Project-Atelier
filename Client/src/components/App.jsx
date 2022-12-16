import axios from 'axios';
import QA from './Q&A/QAContainer.jsx';
import * as React from 'react';
import MainRnR from './RnR/MainRnR.jsx';
import MainView from './ProductDetails/MainView.jsx'
import NavBar from '../NavBar.jsx'
const { useState, useEffect } = React;

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [product, setProduct] = useState(37318);
  const [productData, setProductData] = useState({});
  const [metaData, setMetaData] = useState({"characteristics": {}, "ratings":{}});
  const [nightMode, setNightMode] = useState(false);

  //The below function toggles the background and font color
  useEffect(() => {
    if(nightMode) {
      document.body.style.backgroundColor = '#404258';
      document.body.style.color = '#DCD7C9';
    }
    if(!nightMode){
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [nightMode]);

  const getProductData = (productId) => {
    axios.get('/products/:product_id', {
      params: {
        'id': productId
      },
    })
    .then((response) => {
      let newProduct = response.data
      setProductData(newProduct)
    })
    .catch((error) => {
      console.log('Error in client from get request', error);
    });
  };

  const getReviewMeta = (productId) => {
    axios.get('/reviews/meta', {
      params: {
        'id': productId
      },
    })
    .then((response) => {
      setMetaData(response.data);
    })
    .catch((error) => {
      console.log('Error in client from get request', error);
    });
  };

  const averageRating = (arrOfRatings) => {
    var result = 0;

    for (let i = 0; i < arrOfRatings.length; i++) {
      result += arrOfRatings[i].rating
    }
    return (result/arrOfRatings.length);
  }

  const getReviews = (id) => {
    axios.get('/reviews', {
      params: {
        product_id: id,
        count: 100,
        sort: 'relevant',
      },
    })
      .then((response) => {
        setReviews(response.data.results);
        setAvgRating(averageRating(response.data.results));
      })
      .catch((error) => {
        console.log('Error retrieving reviews');
      })
  };


  useEffect(() => {
    getReviewMeta(product);
    getProductData(product);
    getReviews(product);
    //getreviews
    //get question stuff
    //seteventlistner()
  }, []);

  return (
    <div id= 'app'>
      <NavBar setNightMode={setNightMode} nightMode={nightMode}/>
      <MainView
        product={product}
        productData={productData}
        reviewMeta={metaData}
        rating={avgRating} />

      <QA product={product} productData={productData} nightMode={nightMode}/>

      <MainRnR
      rating={avgRating}
      setReviews={setReviews}
      reviews={reviews}
      product={product}
      metaData={metaData}
      productData={productData} />
    </div>
  )
}
