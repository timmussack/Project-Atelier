import React, { useState, useEffect } from 'react';
import Stars from '../Stars.jsx';
import { BarChartContainer, StarBarBackground, StarBarForegound } from './ChartStyling';

const BreakdownBarChart = ({ metaData }) => {

  const percentageCalc = (num) => {
    let total = (Object.values(metaData)).reduce((a, b) =>  { return Number(a) + Number(b)}, []);
    let percent = Number(num)/total * 100 + '%'
    return percent.toString();
  };

  return (
    <>
      {[5, 4, 3, 2, 1].map((rating, index) => {
          return <BarChartContainer>
            {rating} Stars
              <StarBarBackground>
                <StarBarForegound style={{width: percentageCalc(metaData[rating])}}></StarBarForegound>
              </StarBarBackground>
            {metaData[rating]}
            </BarChartContainer>
      })}
    </>
  )
};

export default BreakdownBarChart;