import React from 'react';
import styled, { css } from 'styled-components';
import { BarContainer, BarForeground, BarBackground, Text } from './ChartStyling';

const ComfortChart = ({comfort}) => {
  let arrow = '▼';
  let comfNum = Math.round(Number(comfort) * 2) / 2;

  if (comfNum) {
    return (
        <div>
          Comfort
          <BarContainer>
            <BarBackground>
              <BarForeground>{comfNum === 1.0 ? arrow : null}</BarForeground>
              <BarForeground>{comfNum === 1.5 ? arrow : null}</BarForeground>
              <BarForeground>{comfNum === 2.0 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{comfNum === 2.5 ? arrow : null}</BarForeground>
              <BarForeground>{comfNum === 3.0 ? arrow : null}</BarForeground>
              <BarForeground>{comfNum === 3.5 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{comfNum === 4.0 ? arrow : null}</BarForeground>
              <BarForeground>{comfNum === 4.5 ? arrow : null}</BarForeground>
              <BarForeground>{comfNum === 5.0 ? arrow : null}</BarForeground>
            </BarBackground>
          </BarContainer>
          <BarContainer>
            <Text>Poor</Text>
            <Text style={{textAlign: "center"}}>Expected</Text>
            <Text style={{textAlign: "end"}}>Perfect</Text>
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

export default ComfortChart;