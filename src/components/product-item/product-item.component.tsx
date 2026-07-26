// Style
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

// Utilities
import type { Product } from '../../types/product.type'

interface ProductItemProps {
  product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
