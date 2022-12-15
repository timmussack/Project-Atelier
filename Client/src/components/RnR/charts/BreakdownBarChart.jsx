import React from 'react';
import Stars from '../Stars.jsx';

const BreakdownBarChart = ({ metaData }) => {

  return (
    <>
    { Object.keys(metaData.characteristics).map((characteristic, index) => {
      return (
        <div key={index}>
          {characteristic}
          <Stars rating={metaData.characteristics[characteristic].value} selectable={true}/>
        </div>
      )
    })}
    </>
  )
};

export default BreakdownBarChart;
