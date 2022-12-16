import React from 'react';
import styled, { css } from 'styled-components';

export const BarBackground = styled.div`
    width: 33%;
    height: 10px;
    background-color: rgb(240, 240, 240);
    text-align: center;
    margin: 3px 2px 5px 2px;
    display: flex;
`;

export const BarForeground = styled.div`
    width: 40%;
    color: rgb(54, 54, 54);
    display: inline-flex;
    justify-content: center;
    align-items: self-end;
`;

export const BarContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const Text = styled.div`
    max-width: 33%
    font-size: 11px;
    padding-bottom: 1em;
`;

export const BarChartContainer = styled.div`
    display:flex-column;
    justify-content: space-between;
    margin: 5px 0px 5px 0px;
`;

export const IndividualBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

export const StarBarBackground = styled.div`
    width: 100%;
    max-width: 70%;
    max-height: 10px;
    background-color: rgb(240, 240, 240);
    border: 1px solid;
    margin-top: 13px;
    margin-bottom: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const StarBarForegound = styled.div`
    display: flex;
    align-self: flex-start;
    background-color: gray;
    height: 10px;
`;

export const ResetButton = styled.button`
  border: none;
  text-decoration: underline;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  font-family: Jost;
  cursor: pointer;
`;