import { PropTypes } from 'react'
import styled from 'styled-components'

const Block = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  color: ${props => props.reverse ? '#FFF' : '#333'}
`

Block.propTypes = {
  reverse: PropTypes.bool
}

Block.defaultProps = {
  reverse: false
}

export default Block
