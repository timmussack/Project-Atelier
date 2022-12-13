import React from 'react';
import styled, { css } from 'styled-components';
import { BarContainer, BarForeground, BarBackground, Text } from './ChartStyling';

const LengthChart = ({length}) => {
  let arrow = '▼';
  let lengthNum = Math.round(Number(length) * 2) / 2;

  if (lengthNum) {
    return (
        <div>
          Length
          <BarContainer>
          <BarBackground>
              <BarForeground>{lengthNum === 1.0 ? arrow : null}</BarForeground>
              <BarForeground>{lengthNum === 1.5 ? arrow : null}</BarForeground>
              <BarForeground>{lengthNum === 2.0 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{lengthNum === 2.5 ? arrow : null}</BarForeground>
              <BarForeground>{lengthNum === 3.0 ? arrow : null}</BarForeground>
              <BarForeground>{lengthNum === 3.5 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{lengthNum === 4.0 ? arrow : null}</BarForeground>
              <BarForeground>{lengthNum === 4.5 ? arrow : null}</BarForeground>
              <BarForeground>{lengthNum === 5.0 ? arrow : null}</BarForeground>
            </BarBackground>
          </BarContainer>
          <BarContainer>
            <Text>Too Short</Text>
            <Text style={{textAlign: "center"}}>Perfect</Text>
            <Text style={{textAlign: "end"}}>Too Long</Text>
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

export default LengthChart;