import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const DashboardLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh
    height: 100%
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`;