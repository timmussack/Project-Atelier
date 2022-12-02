const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Client/dist')));
app.use(express.json());

const code = process.env.CAMPUS_CODE;
const key = process.env.KEY;
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${code}/`;


// ------------------- APP.JSX -------------------------- //

// The below request get product detail
app.get('/products/:product_id', (req, res) => {
  const { id } = req.query;
  axios.get(`${url}products/${id}`, {
    headers: {
      Authorization: `${key}`,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error in server line 25', error);
    });
});

//Getting review meta
app.get('/reviews/meta', (req, res) => {
  const { id } = req.query;
  axios.get(`${url}reviews/meta?product_id=${id}`, {
    headers: {
      Authorization: `${key}`,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error in server line 25', error);
    });
});


// ------------------------------------------------------ //


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
