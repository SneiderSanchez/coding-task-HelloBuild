import Paper from '@material-ui/core/Paper'
import BottomNavigation from '@material-ui/core/BottomNavigation'
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

export const NavigationContainer = styled(BottomNavigation)`
  flex:1;
  justify-content:center;
  text-align: center;

  text-decoration: none;
  margin-top: 6rem;
  color: #000;
`
