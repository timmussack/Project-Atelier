import axios from 'axios';
import * as react from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import QuestionList from './QAList.jsx';
import QASearch from './QASearch.jsx';
import QAButtons from './QAButtons.jsx';
import QuestionModal from './QuestionModal.jsx';

const { useState, useEffect } = react;

const QATitle = styled.div`
  font-family: Helvetica, Sans-Serif;
  margin: 10px 20px;
  font-size: 12px;
`;
QATitle.displayName = 'QATitle';


export default function QAContainer( { product, productData } ) {
  const [QAs, setQAs] = useState([]);
  const [showQModal, setShowQModal] = useState(false);


  const getQAs = (productId) => {
    axios.get('/qa/questions', {
      params: {
        product_id: productId,
        page: 1,
        count: 10,
      },
    })
      .then((response) => {
        let data = response.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness
        })
        setQAs(data);
      })
      .catch((error) => {
        //console.log('Error in client from getQAs request', error);
      });
  };

  useEffect(() => {
    getQAs(product);
  }, []);

  const handleSearch = (search) => {
    console.log(search);
    setQAs(
      QAs.filter(QA => QA.question_body.toLowerCase().includes(search.toLowerCase()))
    )
  };

  return (
    <>
      <QATitle>
        QUESTIONS & ANSWERS
      </QATitle>
      <QASearch product={product} getQAs={getQAs} handleSearch={ handleSearch }/>
      <QuestionList QAs={ QAs }/>
      <QuestionModal product={product} productData={productData}showQModal={showQModal} setShowQModal={setShowQModal}/>
      <QAButtons showQModal={showQModal} setShowQModal={setShowQModal}/>
    </>
  );
}