import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

// Utilities
import type { CartProduct } from '../../types/cart.type'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

interface CartItemProps {
  product: CartProduct
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  const handleRemoveClick = () => removeProductFromCart(product.id)

  const handleIncreaseQuantityClick = () => increaseProductQuantity(product.id)

  const handleDecreaseQuantityClick = () => decreaseProductQuantity(product.id)

  return (
    <CartItemContainer>
      <CartItemImage $imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseQuantityClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreaseQuantityClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
