import axios from 'axios';
<<<<<<< HEAD
import * as react from 'react';
import React from 'react';
import QA from './Q&A/QA.jsx';
=======
import * as React from 'react';
import Ratings from './RnR/ratings.jsx';
>>>>>>> 8d11734e4c6e32c6f5538c51f8cd3a9686867786

const { useState, useEffect } = React;

export default function App() {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(3);
  const [stars, setStars] = useState([]);

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

  useEffect(() => {
    axios.get('/products', {
      params: {
        page: 1,
        count: 5,
      },
    })
      .then((response) => {
        setStars(createStars(rating));
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error in client from get request', error);
      });
  }, []);

  return (
    <div>
      <h1>test</h1>
<<<<<<< HEAD
      <QA />
=======
      <Ratings stars={stars} rating={rating} />
>>>>>>> 8d11734e4c6e32c6f5538c51f8cd3a9686867786
    </div>
  );
}
