import './categories.styles.css'
import { categoriesData } from '../../data/categories'
import CategoryItem from '../category-item/category-item.components'

const Categories = () => {
  //const [categories, setCategories] = useState<Category[]>([])

  //const fetchCategories = async () => {
  // try {
  // const data = await axios.get('${env.apiUrl}/category')
  //   console.log('Fetched categories:', { data })
  //   setCategories(data.data)
  // } catch (error) {
  //   console.error('Error fetching categories:', error)
  // }
  //}

  //useEffect(() => {
  // fetchCategories()
  //}, [])

  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {categoriesData.map((category) => (
          <div key={category.id} className='category-item'>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
