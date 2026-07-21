export interface CategoryData {
  id: number
  categoryName: string
  categoryUrl: string
  name: string
  displayName: string
  imageUrl: string
}

export const categoriesData: CategoryData[] = [
  {
    id: 1,
    categoryName: 'Roupas',
    categoryUrl:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    name: 'Category 1',
    displayName: 'Category 1',
    imageUrl:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    categoryName: 'Móveis',
    categoryUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    name: 'Category 2',
    displayName: 'Category 2',
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    categoryName: 'Cosméticos',
    categoryUrl:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=600&q=80',
    name: 'Category 3',
    displayName: 'Category 3',
    imageUrl:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    categoryName: 'Utencilios para Chuva',
    categoryUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    name: 'Category 4',
    displayName: 'Category 4',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    categoryName: 'Roupa Esportiva',
    categoryUrl:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    name: 'Category 5',
    displayName: 'Category 5',
    imageUrl:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80'
  }
]
