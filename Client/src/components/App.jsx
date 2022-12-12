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
  const [metaData, setMetaData] = useState({});

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
      //console.log('Successful request for meta data');
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
        count: 50,
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

  /*

    handleClick = (event, widget) => {
        //create time
        // element = event.target
        // Overiew/qa/rr
    }




  */

  /*
  set event listener function
  document.body.addEventListener('click', handleClick, true)




  */

  useEffect(() => {
    getReviews(product);
    getProductData(product);
    getReviewMeta(product);
    //getreviews
    //get question stuff
    //seteventlistner()
  }, []);

  return (
    <div id= 'app'>
      <NavBar/>
      <MainView
        product={product}
        productData={productData}
        reviewMeta={metaData}
        rating={avgRating} />

      <QA product={product} productData={productData}/>

      <MainRnR
      rating={avgRating}
      reviews={reviews}
      productID={product}
      metaData={metaData} />
    </div>
  );
}
