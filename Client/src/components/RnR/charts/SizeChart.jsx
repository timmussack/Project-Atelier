import React from 'react';
import styled, { css } from 'styled-components';
import { BarContainer, BarForeground, BarBackground, Text } from './ChartStyling';

const SizeChart = ({size}) => {
  let arrow = '▼';
  let sizeNum = Math.round(Number(size) * 2) / 2;

  if (sizeNum) {
    return (
        <div>
          Size
          <BarContainer>
          <BarBackground>
              <BarForeground>{sizeNum === 1.0 ? arrow : null}</BarForeground>
              <BarForeground>{sizeNum === 1.5 ? arrow : null}</BarForeground>
              <BarForeground>{sizeNum === 2.0 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{sizeNum === 2.5 ? arrow : null}</BarForeground>
              <BarForeground>{sizeNum === 3.0 ? arrow : null}</BarForeground>
              <BarForeground>{sizeNum === 3.5 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{sizeNum === 4.0 ? arrow : null}</BarForeground>
              <BarForeground>{sizeNum === 4.5 ? arrow : null}</BarForeground>
              <BarForeground>{sizeNum === 5.0 ? arrow : null}</BarForeground>
            </BarBackground>
          </BarContainer>
          <BarContainer>
            <Text>Too small</Text>
            <Text style={{textAlign: "center"}}>Perfect</Text>
            <Text style={{textAlign: "end"}}>Too big</Text>
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

export default SizeChart;