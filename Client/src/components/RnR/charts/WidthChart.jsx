import React from 'react';
import styled, { css } from 'styled-components';
import { BarContainer, BarForeground, BarBackground, Text } from './ChartStyling';

const WidthChart = ({width}) => {
  let arrow = '▼';
  let widthNum = Math.round(Number(width) * 2) / 2;

  if (widthNum) {
    return (
        <div>
          Width
          <BarContainer>
            <BarBackground>
              <BarForeground>{widthNum === 1.0 ? arrow : null}</BarForeground>
              <BarForeground>{widthNum === 1.5 ? arrow : null}</BarForeground>
              <BarForeground>{widthNum === 2.0 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{widthNum === 2.5 ? arrow : null}</BarForeground>
              <BarForeground>{widthNum === 3.0 ? arrow : null}</BarForeground>
              <BarForeground>{widthNum === 3.5 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{widthNum === 4.0 ? arrow : null}</BarForeground>
              <BarForeground>{widthNum === 4.5 ? arrow : null}</BarForeground>
              <BarForeground>{widthNum === 5.0 ? arrow : null}</BarForeground>
            </BarBackground>
          </BarContainer>
          <BarContainer>
            <Text>Too Narrow</Text>
            <Text style={{textAlign: "center"}}>Perfect</Text>
            <Text style={{textAlign: "end"}}>Too Wide</Text>
          </BarContainer>
        </div>
    );
  } else {
    return (
      <>
      </>
    );
  }
};

export default WidthChart;