import type { FunctionComponent } from 'react'

// Utilities
import type { Category } from '../../types/category.type'

// Styles
import { CategoryItemContainer, CategoryName } from './category-item.styles.ts'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer $backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName ?? category.name}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
