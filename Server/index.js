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
      console.error('Error getting product data request', error);
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
      console.error('Error on Getting review meta request', error);
    });
});


// ----------------Product Styles Request--------------------------- //
app.get('/products/:product_id/styles', (req, res) => {
  const { id } = req.query;
  axios.get(`${url}products/${id}/styles`, {
    headers: {
      Authorization: `${key}`,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error in Product styles request', error);
      res.sendStatus(404).end()
    });
});
//--------------------------------------------------------------//

//----------------------QA-----------------------------------//

//Gets list of questions with answers given a product id
app.get('/qa/questions', (req, res) => {
  const { product_id, page, count } = req.query;
  axios.get(`${url}qa/questions?product_id=${product_id}&page=${page}&count=${count}`, {
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

//Gets list of answers given a question id
app.get('/qa/questions/:question_id/answers', (req, res) => {
  const { question_id } = req.query;
  axios.get(`${url}qa/questions/${question_id}/answers`, {
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
