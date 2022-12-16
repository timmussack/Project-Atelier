const express = require('express');
const path = require('path');
const axios = require('axios');
const multer = require('multer');
const cors = require('cors');
const S3 = require('aws-sdk/clients/s3');
const { GetObjectCommand } = require('aws-sdk/clients/s3');
const uuid = require("uuid").v4;
const compression = require('compression');
require('dotenv').config();

const app = express();
app.use(compression({level: 9}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Client/dist')));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const code = process.env.CAMPUS_CODE;
const key = process.env.KEY;
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${code}/`;

// ------------------- S3 -------------------------- //
const storage = multer.memoryStorage();

const upload = multer({ storage: storage })

const s3Upload = async (files) => {
  const s3 = new S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_REGION,
  });

  const params = files.map((file) => {
    return {
      Bucket: process.env.S3_BUCKET,
      Key: uuid(),
      Body: file.buffer,
      ContentType: file.mimetype,
    };
  });

  return await Promise.all(params.map((param) => s3.upload(param).promise()));
};

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
  axios.get(`${url}qa/questions/${question_id}/answers?page=${page}&count=${count}`, {
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
  const { body, name, email, photos, questionId } = req.body;
  axios({
    method: 'post',
    url: `${url}qa/questions/${questionId}/answers`,
    data: {
      body: body,
      name: name,
      email: email,
      photos: photos
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
      console.error(error, 'Error in server line 179');
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
      console.error(error, 'Error in server line 195');
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
      console.error(error, 'Error in server line 211');
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
      console.error(error, 'Error in server line 227');
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

app.post('/reviews', (req, res) => {
  const { product_id, body, rating, recommend, name, summary, email, photos, characteristics } = req.body;
    axios({
      method: 'post',
      url: `${url}reviews`,
      headers: {Authorization: `${key}`},
      data: {
        product_id: product_id,
        characteristics: {},
        body:body ,
        rating: rating,
        recommend: recommend,
        name: name,
        summary: summary,
        email: email,
        photos: photos,
      },
    }).then(result => {
      res.end();
    }).catch(error => {
      console.error(error);
    })
});

app.post('/photoUpload', upload.array('images', 5), async (req, res) => {
  try {
    const results = await s3Upload(req.files);
    return res.json(results)
  } catch (err) {
    console.log(err);
  }
});


//Posts an interaction (click of an element) to the database
app.post('/interactions', (req, res) => {
  const { element, time, widget } = req.body;
  axios({
    method: 'post',
    url: `${url}interactions`,
    data: {
      element: element,
      time: time,
      widget: widget
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

//Serves up our homepage, this is needed for deployment on AWS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist', 'Index.html'))
})

app.post('/cart', (req, res) => {
  const { sku_id } = req.body;
  axios({
    method: 'post',
    url: `${url}cart`,
    data: {
      sku_id: sku_id
    },
    headers: {Authorization: `${key}`}
  })
    .then((response) => {
      response.status === 201 ?
      res.status(201).send('Succesful Add To Cart')
      : null;
    })
    .catch((err) => {throw err})
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
