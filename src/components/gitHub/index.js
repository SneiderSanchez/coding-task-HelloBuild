import React from 'react'
import { ButomContainer, LinkHome, ContainerProfile, AvatarProfile } from './styles'
import Button from '@material-ui/core/Button'

import { Card, ListSubheader, Container, Avatar, ListItem, ListItemAvatar, ListItemText, List, Typography, Divider } from '@material-ui/core'

export const Github = props => {
  return (
    <Container maxWidth='sm'>
      <ButomContainer color='text.primary'>
        <LinkHome to='/'>Home </LinkHome>
        <Button variant='contained' onClick={() => props.handleLogout()}>
        Cerrar Sesion
        </Button>
      </ButomContainer>
      <ContainerProfile>
        <AvatarProfile src={props.data.avatarUrl} width='30px' />
        <Typography gutterBottom variant='h5' component='h2'>
          Hola {props.data.login} !!
        </Typography>
      </ContainerProfile>
      <Card>
        <List
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
                  Repositorios de  {props.data.login}
            </ListSubheader>
          }
        >
          {props.data.repositories.nodes.map((item, index) =>
            (
              <React.Fragment key={index}>
                <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                    <Avatar alt='Remy Sharp' src={item.owner.avatarUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.nameWithOwner}
                    secondary={item.description ? item.description : 'No hay descripcion'}
                  />
                </ListItem>
                <Divider variant='inset' component='li' />
              </React.Fragment>
            )
          )}
        </List>
      </Card>
    </Container>
  )
}
