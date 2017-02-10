import { PropTypes } from 'react'
import styled from 'styled-components'

const Atom = styled.span`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.reverse ? '#FFF' : '#333'};
`

Atom.propTypes = {
  reverse: PropTypes.bool
}

Atom.defaultProps = {
  reverse: false
}

export default Atom
