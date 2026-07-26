import { collection, getDocs } from 'firebase/firestore'
import React, { createContext, useState, type ReactNode } from 'react'

// Utilities
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converter'
import type {Category} from '../types/category.type'

interface ICategoryContext {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
}

interface CategoryContextProviderProps {
  children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider: React.FC<CategoryContextProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)

      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
