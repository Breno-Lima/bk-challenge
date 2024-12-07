"use client"
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000000; 
    font-family: Arial, sans-serif;
    width: 100%;
    }

    @media (max-width: 768px) {
    overflow-x: hidden;
    width: 86%;
  }
`;

