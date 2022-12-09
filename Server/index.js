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

// getting reviews
app.get('/reviews', (req, res) => {
  const { product_id, count, sort } = req.query;
  axios.get(`${url}reviews?product_id=${product_id}&count=${count}&sort=${sort}`, {
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
      console.error('Error in server line 99', error);
    });
});

//Gets list of answers given a question id
app.get('/qa/questions/:question_id/answers', (req, res) => {
  const { question_id, page, count } = req.query;
  axios.get(`${url}qa/questions/${question_id}/answers`, {
    headers: {
      Authorization: `${key}`,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error in server line 115', error);
    });
});

//Saves a new question to the database
app.post('/qa/questions', (req, res) => {
  const { body, name, email, product_id } = req.body;
  axios({
    method: 'post',
    url: `${url}qa/questions`,
    data: {
      body: body,
      name: name,
      email: email,
      product_id: product_id
    },
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      res.sendStatus(404);
      res.end('Not Found');
      console.error(error, 'Error in server line 139');
    });
});

//Saves an answer to the database
app.post('/qa/questions/:question_id/answers', (req, res) => {
  const { body, name, email, questionId } = req.body;
  axios({
    method: 'post',
    url: `${url}qa/questions/${questionId}/answers`,
    data: {
      body: body,
      name: name,
      email: email,
      photos: []
    },
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      res.sendStatus(404);
      res.end('Not Found');
      console.error(error, 'Error in server line 163');
    });
});

//Marks a question as helpful
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const { question_id } = req.body;
  axios({
    method: 'put',
    url: `${url}qa/questions/${question_id}/helpful`,
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      console.error(error, 'Error in server line 180');
    });
});

//Marks an answer as helpful
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const { answer_id } = req.body;
  axios({
    method: 'put',
    url: `${url}qa/answers/${answer_id}/helpful`,
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      console.error(error, 'Error in server line 180');
    });
});

//Reports an answer
app.put('/qa/answers/:answer_id/report', (req, res) => {
  const { answer_id } = req.body;
  axios({
    method: 'put',
    url: `${url}qa/answers/${answer_id}/report`,
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      console.error(error, 'Error in server line 180');
    });
});

//Reports a question
app.put('/qa/questions/:question_id/report', (req, res) => {
  const { question_id } = req.body;
  axios({
    method: 'put',
    url: `${url}qa/questions/${question_id}/report`,
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      console.error(error, 'Error in server line 180');
    });
});

//Reports a review
app.put('/reviews/:review_id/report', (req, res) => {
  var { review_id } = req.body;
  axios({
    method: 'put',
    url: `${url}reviews/${review_id}/report`,
    headers: {Authorization: `${key}`}
  })
    .then(result => {
      res.end();
    })
    .catch(error => {
      console.error(error);
    });
});
//Marks review as helpful
app.put('/reviews/:review_id/helpful', (req, res) => {
  var { review_id } = req.body;
  axios({
    method: 'put',
    url: `${url}reviews/${review_id}/helpful`,
    headers: {Authorization: `${key}`}
  })
    .then(result => {
      res.end();
    })
    .catch(error => {
      console.error(error);
    });
});

// app.post('/reviews', (req, res) => {
//   const { product_id, reccomend, summary, name, email, body } = req.body;
//   axios({
//     method: 'post',
//     url: `${url}reviews`
//     data: {
//       product_id: product_id,
//       reccomend: reccomend,
//       summary: summary,
//       name: name,
//       email: email,
//       body: body,
//     }
//   })
//   .then((response) => {
//     res.end();
//   })
//   .catch((err) => {
//     console.log('Error posting review in server', err)
//   })
// })

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
