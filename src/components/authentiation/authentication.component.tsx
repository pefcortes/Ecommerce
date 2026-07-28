import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header.component'
import Loading from '../loading/loading.componnet'

interface AuthenticationProps {
  children?: React.ReactNode
}

const Authentication: React.FC<AuthenticationProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes ...' />
      </>
    )
  }

  return <>{children}</>
}
export default Authentication
