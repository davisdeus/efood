import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  salmonpink: '#fde1e1',
  pink: '#E66767',
  lightpink: '#ffcdcd',
  yellow: '#FFB930',
  white: '#ffffff',
  gray: '#A3A3A3',
  beije: '#FFEBD9',
  black: '#000',
  turquoise: '#FFF8F2',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px',
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${colors.turquoise};
  }

  .maxContainer {
    max-width: 1366px;
    height: 2148px;
    background-color: ${colors.turquoise};
    margin: 0 auto;

  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`
export const HeaderBar2 = styled.header`
  width: 1366px;
  background-color: ${colors.beije};

  .containerHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
      width: 850px;
    }
  }

  a {
    color: ${colors.pink};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 1200px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 900px;
  }
`
