import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'

// Components
import CategoryItem from '../category-item/category-item.component'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// Utilities
import type { Category } from '../../types/category.type'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converter.ts'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    let isMounted = true

    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'categories').withConverter(categoryConverter)
        )

        const categoriesFromFirestore = querySnapshot.docs.map((doc) => doc.data())

        if (isMounted) {
          setCategories(categoriesFromFirestore)
        }
      } catch (error) {
        console.log({ error })
      }
    }

    void fetchCategories()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
