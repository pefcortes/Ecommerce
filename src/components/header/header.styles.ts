import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #212529;
  color: #f8f9fa;
`

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderItem = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 1rem;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-right: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`

export const HeaderCartCount = styled.p`
  margin-left: 5px;
`
