import { CommerceProvider } from '../../contexts/commerce.context'
import { EditPage } from './EditPage'

export const EditMenu = () => {
  return (
    <CommerceProvider>
      <EditPage />
    </CommerceProvider>
  )
}
