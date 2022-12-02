import axios from 'axios';
import QA from './Q&A/QAContainer.jsx';
import * as React from 'react';
import Ratings from './RnR/ratings.jsx';

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
      <QA product={product} />
      <Ratings stars={stars} rating={rating} />
    </div>
  );
}
