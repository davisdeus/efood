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

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${cores.preto};
  }

  .maxContainer {
    max-width: 1366px;
    height: 1650px;
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

  .contaiberHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1024px;
    margin: 0 auto;
  }

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`
