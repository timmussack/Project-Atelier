import React from 'react';
import styled, { css } from 'styled-components';
import { BarContainer, BarForeground, BarBackground, Text } from './ChartStyling';

const QualityChart = ({quality}) => {
  let arrow = '▼';
  let qualNum = Math.round(Number(quality) * 2) / 2;

  if (qualNum) {
    return (
        <div>
          Quality
          <BarContainer>
          <BarBackground>
              <BarForeground>{qualNum === 1.0 ? arrow : null}</BarForeground>
              <BarForeground>{qualNum === 1.5 ? arrow : null}</BarForeground>
              <BarForeground>{qualNum === 2.0 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{qualNum === 2.5 ? arrow : null}</BarForeground>
              <BarForeground>{qualNum === 3.0 ? arrow : null}</BarForeground>
              <BarForeground>{qualNum === 3.5 ? arrow : null}</BarForeground>
            </BarBackground>
            <BarBackground>
              <BarForeground>{qualNum === 4.0 ? arrow : null}</BarForeground>
              <BarForeground>{qualNum === 4.5 ? arrow : null}</BarForeground>
              <BarForeground>{qualNum === 5.0 ? arrow : null}</BarForeground>
            </BarBackground>
          </BarContainer>
          <BarContainer>
            <Text>Poor</Text>
            <Text style={{textAlign: "center"}}>Expected</Text>
            <Text style={{textAlign: "end"}}>Great</Text>
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

export default QualityChart;