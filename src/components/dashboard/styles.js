import { BottomNavigation, Container, CardHeader, Button } from '@material-ui/core'
import styled from 'styled-components'

export const ContainerMenu = styled(Container)`
flexGrow: 1;
margin-top:3rem;
`

export const TitleMenu = styled(CardHeader)`
  text-align: center;
`

export const NavigationContainer = styled(BottomNavigation)`
  flex:1;
  justify-content:center;
  text-align: center;
  text-decoration: none;
  margin-top: 2rem;
  padding:4rem;
  color: #000;
`
export const GoogleCalendarImage = styled.img`
width:100px;
height:100px;
`
export const GithubImage = styled.img`
width:100px;
height:100px;
`
export const LogoutButton = styled(Button)`
margin: 2rem auto !important;
display: block !important;
`
