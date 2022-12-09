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
  const [product, setProduct] = useState(37311);
  const [productData, setProductData] = useState({});
  const [metaData, setMetaData] = useState({
    "product_id": "37319",
    "ratings": {
        "1": "3",
        "2": "2",
        "3": "9",
        "4": "19",
        "5": "12"
    },
    "recommended": {
        "false": "16",
        "true": "29"
    },
    "characteristics": {
        "Size": {
            "id": 125060,
            "value": "1.7692307692307692"
        },
        "Width": {
            "id": 125061,
            "value": "1.8200000000000000"
        },
        "Comfort": {
            "id": 125062,
            "value": "1.7209302325581395"
        },
        "Quality": {
            "id": 125063,
            "value": "1.9183673469387755"
        }
    }
});

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
  }, []);

  return (
    <div id= 'app'>
      <NavBar/>
      <MainView
        product={product}
        productData={productData}
        reviewMeta={metaData} />

      <QA product={product} productData={productData}/>

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
