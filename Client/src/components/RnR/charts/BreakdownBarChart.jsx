import React from 'react';
import Stars from '../Stars.jsx';

const BreakdownBarChart = ({ metaData }) => {

  const displayChars = (characteristics) => {
    let chars = ['Too small', 'Perfect', 'Too big']
    if (characteristics === 'Quality') {
      chars = ['Poor', 'Perfect']
    }
    return chars.map((char) => <span key={char}>{char}</span>)
  }

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