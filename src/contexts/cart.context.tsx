import { createContext, useState, type ReactNode } from 'react'
import type { CartProduct } from '../types/cart.type'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])
  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
