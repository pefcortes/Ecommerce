import type { Product } from './product.type'

export interface CartProduct extends Product {
  quantity: number
}
