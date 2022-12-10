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
`;

export const BarContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const Text = styled.div`
    width: 33%
    font-size: 11px;
    padding-bottom: 1em;
`;

