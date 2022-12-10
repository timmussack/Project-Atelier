import React from 'react';
import styled, { css } from 'styled-components';
import { BarContainer, BarForeground, BarBackground, Text } from './ChartStyling';

const FitChart = ({fit}) => {
  let arrow = '▼';

  let fitNum = Math.round(Number(fit) * 2) / 2;

  if (fitNum) {
    return (
        <div>
          Fit
          <BarContainer>
          <BarBackground>
              <BarForeground>{fitNum === 1.0 ? arrow : null}</BarForeground>
              <BarForeground>{fitNum === 1.5 ? arrow : null}</BarForeground>
              <BarForeground>{fitNum === 2.0 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{fitNum === 2.5 ? arrow : null}</BarForeground>
              <BarForeground>{fitNum === 3.0 ? arrow : null}</BarForeground>
              <BarForeground>{fitNum === 3.5 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{fitNum === 4.0 ? arrow : null}</BarForeground>
              <BarForeground>{fitNum === 4.5 ? arrow : null}</BarForeground>
              <BarForeground>{fitNum === 5.0 ? arrow : null}</BarForeground>
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

export default FitChart;