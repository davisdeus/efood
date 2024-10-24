import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaSalmao: '#fde1e1',
  rosa: '#E66767',
  rosaClaro: '#ffcdcd',
  amarelo: '#FFB930',
  branco: '#ffffff',
  cinza: '#A3A3A3',
  beje: '#FFEBD9',
  preto: '#000',
  Seashell: '#FFF8F2',
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
    background-color: ${cores.Seashell};
  }

  .maxContainer {
    max-width: 1366px;
    height: 2148px;
    background-color: ${cores.Seashell};
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
  background-color: ${cores.beje};

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
    color: ${cores.rosa};
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
