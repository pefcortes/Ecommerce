import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import {
  HeaderCartCount,
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <HeaderCartCount>5</HeaderCartCount>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
