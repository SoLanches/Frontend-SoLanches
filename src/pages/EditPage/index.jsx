import { CommerceProvider } from '../../contexts/commerce.context'
import { EditMenu } from './EditMenu'

export const EditPage = () => {
  return (
    <CommerceProvider>
      <EditMenu />
    </CommerceProvider>
  )
}
