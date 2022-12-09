import React, { useState, useEffect } from 'react';
import FitChart from './FitChart.jsx';
import LengthChart from './LengthChart.jsx';
import ComfortChart from './ComfortChart.jsx';
import SizeChart from './SizeChart.jsx';
import WidthChart from './WidthChart.jsx';
import QualityChart from './QualityChart.jsx';

const BreakdownArrowChart = ({ metaData }) => {

  let size, quality, comfort, width, fit, length;
  if (metaData.Size) { size = metaData.Size.value; }
  if (metaData.Quality) { quality = metaData.Quality.value; }
  if (metaData.Comfort) { comfort = metaData.Comfort.value; }
  if (metaData.Width) { width = metaData.Width.value; }
  if (metaData.Fit) { fit = metaData.Fit.value; }
  if (metaData.Length) { length = metaData.Length.value; }

  return (
    <>
      <FitChart fit={fit}/>
      <SizeChart size={size}/>
      <WidthChart width={width}/>
      <LengthChart length={length}/>
      <QualityChart quality={quality}/>
      <ComfortChart comfort={comfort}/>
    </>
  )
};

export default BreakdownArrowChart;