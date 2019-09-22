import React, { useState, useEffect } from 'react'
import { NavigationContainer, Anchor } from './styles'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link, navigate } from '@reach/router'

import GithubIcon from '../../icons/Github'
import GoogleCalendarIcon from '../../icons/GoogleCalendar'

export const Dashboard = props => {
  const [token, setToken] = useState({ api: null, token: null })
  const urlParams = props.location.href
  useEffect(() => {
    console.log(urlParams)
    if (urlParams) {
      if (urlParams.includes('googleapis')) {
        navigate(`/googlecalendar?token=${urlParams.split('access_token=')[1].split('&')[0]}`)
      } else if (urlParams.includes('code')) {
        /*         setToken({ api: 1, token: urlParams.split('code=')[1] }) */
        navigate(`/github?token=${urlParams.split('code=')[1]}`)
      }
      console.log(token)
    }
  }, [urlParams])

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
    <NavigationContainer value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction
        component={Link}
        to='/github'
        label='GitHub'
        value='Github'
        icon={<GithubIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to='/googlecalendar'
        label='GoogleCalendar'
        value='GoogleCalendar'
        icon={<GoogleCalendarIcon />}
      />
    </NavigationContainer>

  )
}
