import { ScaleLoader } from 'react-spinners'

import { colors } from '../../styles/stylesGlobal'

import { Container } from './style'

const Loader = () => (
  <Container>
    <ScaleLoader color={colors.pink} />
  </Container>
)

export default Loader
