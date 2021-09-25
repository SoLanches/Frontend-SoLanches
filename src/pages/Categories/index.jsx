import { CategoryProvider } from '../../contexts/categoryCommerce.context'
import { CommerceCategory } from './CommerceCategory'

export const Categories = () => {
  return (
    <CategoryProvider>
    <CommerceCategory/>
    </CategoryProvider>
  )
}
