import type { Category } from '../../types/category.type.ts'

interface CategoryItemProps {
  category: Category
}

import './category-item.styles.css'

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className='category-item-container'
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <div className='category-name'>
        <p>{category.categoryName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
