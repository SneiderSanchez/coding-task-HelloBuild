import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { Link } from '@reach/router'

export const Container = styled(Paper)`
flexGrow: 1
`

export const Anchor = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-top: 10px;
  color: #000;
`
