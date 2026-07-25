import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 0;
`

export const CategoriesContent = styled.div`
  width: min(1920px, 100%);
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(220px, 1fr));
  grid-template-areas:
    'a b'
    'c c'
    'd e';
  grid-gap: 15px;
  padding: 30px;

  & > div {
    min-height: 0;
    height: 100%;
  }

  & div:nth-child(1) {
    grid-area: a;
  }

  & div:nth-child(2) {
    grid-area: b;
  }

  & div:nth-child(3) {
    grid-area: c;
  }

  & div:nth-child(4) {
    grid-area: d;
  }

  & div:nth-child(5) {
    grid-area: e;
  }
`
