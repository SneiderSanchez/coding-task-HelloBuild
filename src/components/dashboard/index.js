import React from 'react'
import { NavigationContainer, GoogleCalendarImage, GithubImage, ContainerMenu, TitleMenu, LogoutButton } from './styles'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from '@reach/router'
import { Card, CardContent } from '@material-ui/core'
export const Dashboard = props => {
  return (
    <ContainerMenu maxWidth='sm'>
      <Card>
        <TitleMenu
          title='Elige una aplicacion!!'
        />
        <CardContent>
          <NavigationContainer value={props.value} onChange={props.handleChange} showLabels>
            <BottomNavigationAction
              component={Link}
              to='/github'
              label='GitHub'
              value='Github'
              icon={<GithubImage src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />}
            />
            <BottomNavigationAction
              component={Link}
              to='/googlecalendar'
              label='GoogleCalendar'
              value='GoogleCalendar'

              icon={<GoogleCalendarImage src='https://cdn.iconscout.com/icon/free/png-256/google-calendar-569190.png' />}
            />
          </NavigationContainer>
        </CardContent>
        <LogoutButton variant='contained' onClick={() => props.handleLogout()}>
          Cerrar sesion
        </LogoutButton>
      </Card>
    </ContainerMenu>

  )
}
