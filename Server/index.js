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

// The below request gets a list of products
app.get('/products', (req, res) => {
  const { page, count } = req.query;
  axios.get(`${url}products?page=${page}&count=${count}`, {
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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
