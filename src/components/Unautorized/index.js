import React from 'react'
import { CardContent, Card, CardHeader, Button } from '@material-ui/core'
import { Sadface, ContainerCard, IconGoogle, CardOAuth, Anchor } from './styles'
export const Unauthorized = props => {
  return (
    <ContainerCard maxWidth='sm'>
      {props.type === 'github'
        ? (
          <Card>
            <CardHeader
              title='No tenemos permiso para mostrar tus repos'
            />
            <CardContent>
              <Sadface src='https://image.flaticon.com/icons/png/512/51/51850.png' />

              <Button href='https://github.com/login/oauth/authorize?client_id=59e2eb0fba1f774b5c2e&scope=use' variant='contained'>
            Ingresa Con  Github
              </Button>
            </CardContent>
          </Card>
        ) : (
          <CardOAuth>
            <h2>Ver eventos del proximo mes</h2>
            <Button variant='contained' color='primary'>
              <IconGoogle src='https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png' />
              <Anchor
                href='https://accounts.google.com/o/oauth2/v2/auth?client_id=518400307134-0apm0q64ss1fbfpm6mvoorvbgm2j5qfs.apps.googleusercontent.com&response_type=token&scope=https://www.googleapis.com/auth/calendar.events&redirect_uri=http://localhost:8080'
              >
                    Ingresa con Google Calendar
              </Anchor>
            </Button>
          </CardOAuth>
        )}
    </ContainerCard>
  )
}
