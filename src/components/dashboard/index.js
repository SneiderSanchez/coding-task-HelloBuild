import React, { useState } from 'react'
import { Container, Anchor } from './styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Github } from '../../containers/Github'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { GoogleCalendar } from '../../containers/GoogleCalendar'

/* import GithubIcon from '@material-ui/icons/Github'
import GoogleCalendarIcon from '@material-ui/icons/GoogleCalendar' */

function TabPanel (props) {
  console.log(props)
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

export const Dashboard = props => {
  const gitToken = props.location.href.split('=')[1]
  const defaultClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${gitToken}`
    }
  })
  const [value, setValue] = useState(0)
  function handleChange (event, newValue) {
    setValue(newValue)
  }

  return (
    <ApolloProvider client={defaultClient}>
      <Container square>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='secondary'
          textColor='secondary'
        >
          <Tab label='Github' id='tab-0' aria-controls='tabpanel-0' /* icon={<GithubIcon />} */ />
          <Tab label='Google Calendar' id='tab-1' aria-controls='tabpanel-1' /* icon={<GoogleCalendarIcon />} */ />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Github token={gitToken} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GoogleCalendar />
        </TabPanel>
        <Anchor to='/login' onClick={() => window.localStorage.clear()}>Cerrar sesion</Anchor>
      </Container>
    </ApolloProvider>

  )
}
