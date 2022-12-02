import axios from 'axios';
import * as react from 'react';
import React from 'react';
import QA from './Q&A/QA.jsx';

const { useState, useEffect } = react;

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/products', {
      params: {
        page: 1,
        count: 5,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error in client from get request', error);
      });
  }, []);

  return (
    <div>
      <h1>test</h1>
      <QA />
    </div>
  );
}
