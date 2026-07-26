import { SyncLoader } from 'react-spinners'

import { LoadingContainer } from './loading.styles'

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <SyncLoader loading={true} size={30} color='#ffffff' />
    </LoadingContainer>
  )
}

export default Loading
