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
  margin-top: 40px;
  font-size: 12px;
`;

//QATitle.displayName = 'QATitle';

const QAWrapper = styled.div`
  font-family: Helvetica, Sans-Serif;
  position:relative ;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 40px;
`;

export default function QAContainer( { product, productData } ) {
  const [QAs, setQAs] = useState([]);
  const [showQModal, setShowQModal] = useState(false);
  const [loadMoreQ, setLoadMoreQ] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getQAs = (productId) => {
    axios.get('/qa/questions', {
      params: {
        product_id: productId,
        page: 1,
        count: 100,
      },
    })
      .then((response) => {
        let data = response.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness
        })
        setQAs(data);
      })
      .catch((error) => {
        console.log(error, 'Error in client from getQAs request');
      });
  };

  const handleElementClick = (event) => {
    const clickTime = new Date();
    axios.post('/interactions', {
      element: event.target.outerHTML,
      time: clickTime,
      widget: 'QA'
    })
      .then((response) => {

      })
      .catch((error) => {
        console.log(error, 'Error in client from QA interaction post request');
      });
  };

  useEffect(() => {
    getQAs(product);
    //The below two lines are used to log user click interactions
    const qaElement = document.getElementById('QA');
    qaElement.addEventListener('click', handleElementClick, true);
  }, []);

  const handleSearch = (search) => {
    setQAs(
      QAs.filter(QA => QA.question_body.toLowerCase().includes(search.toLowerCase()))
    )
  };

  return (
    <QAWrapper id='QA'>
      <QATitle data-testid='qaTitle'>
        QUESTIONS & ANSWERS
      </QATitle>

      <QASearch product={product} getQAs={getQAs} handleSearch={handleSearch} SearchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <QuestionList QAs={QAs} product={product} productData={productData} loadMoreQ={loadMoreQ} setLoadMoreQ={setLoadMoreQ} getQAs={getQAs}/>

      <QuestionModal product={product} productData={productData}showQModal={showQModal} setShowQModal={setShowQModal} getQAs={getQAs}/>

      <QAButtons QAs={QAs} loadMoreQ={loadMoreQ} setLoadMoreQ={setLoadMoreQ} showQModal={showQModal} setShowQModal={setShowQModal}/>
    </QAWrapper>
  );
};