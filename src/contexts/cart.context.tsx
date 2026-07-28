import { createContext, useMemo, useState, type ReactNode } from 'react'
import type { CartProduct } from '../types/cart.type'
import type { Product } from '../types/product.type'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  productsCount: number
  productsTotalPrize: number
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (ProductId: string) => void
  increaseProductQuantity: (ProductId: string) => void
  decreaseProductQuantity: (ProductId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productsCount: 0,
  productsTotalPrize: 0,
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
})

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])
  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const productsTotalPrize = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])

  const addProductToCart = (product: Product) => {
    const productIsAlredyInCart = products.some((item) => item.id == product.id)

    if (productIsAlredyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id != productId)
    )
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id == productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id == productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productsCount,
        productsTotalPrize,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
