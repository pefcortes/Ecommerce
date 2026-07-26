import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category.overview.styles'

// Utilities
import type { Category } from '../../types/category.type'

// Components
import ProductItem from '../product-item/product-item.component'
interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: React.FC<CategoryOverviewProps> = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products?.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
