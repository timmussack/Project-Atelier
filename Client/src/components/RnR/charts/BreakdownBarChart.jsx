import React, { useState, useEffect } from 'react';
import Stars from '../Stars.jsx';
import { BarChartContainer, StarBarBackground, StarBarForegound, IndividualBarContainer, ResetButton } from './ChartStyling';
import axios from 'axios';

const BreakdownBarChart = ({ metaData, reviews, setReviews, product }) => {
  const [filters, setFilters] = useState({
    '5': false,
    '4': false,
    '3': false,
    '2': false,
    '1': false,
  })

  const percentageCalc = (num) => {
    let total = (Object.values(metaData)).reduce((a, b) =>  { return Number(a) + Number(b)}, []);
    let percent = Number(num)/total * 100 + '%'
    return percent.toString();
  };

  const sortOnClick = (stars) => {
    let newFilter = filters;
    let str = stars.toString();
    newFilter[str] = !newFilter[str]
    setFilters(newFilter);
    axios.get('/reviews', {
      params: {
        product_id: product,
        count: 100,
      }
    })
      .then(response => {
        let filtered = response.data.results.filter((review) => {
          for (const option in filters) {
            if (filters[option] && review.rating === Number(option)) {
              return review.rating;
            }
          }
        })
        setFilters(newFilter);
        setReviews(filtered);
      })
      .catch(err => err);
  }

  return (
    <>
      <>
        Active Filters: {Object.keys(filters).map((option) => {
          if (filters[option]) {
            return <>{option} Star Reviews </>
          }
        })}
        <ResetButton onClick={() => setFilters({'5': false,'4': false,'3': false,'2': false,'1': false,})}>Remove All Filters?</ResetButton>
      </>
      <BarChartContainer>
        {[5, 4, 3, 2, 1].map((stars, index) => {
            return (
            <IndividualBarContainer key={stars} onClick={(e) => {sortOnClick(stars)}}>
              {stars} Stars
                <StarBarBackground>
                  <StarBarForegound style={{width: percentageCalc(metaData[stars])}}></StarBarForegound>
                </StarBarBackground>
              {reviews.length ? (
                <>{reviews.filter((currReview) => currReview.rating === stars).length}</>
              ) : (
                <>null</>
              )}
              </IndividualBarContainer>
            )
        })}
      </BarChartContainer>
    </>
  )
};

export default BreakdownBarChart;