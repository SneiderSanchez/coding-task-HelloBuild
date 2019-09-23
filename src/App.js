import React from 'react'
import { Signup } from './containers/Signup'
import { Login } from './containers/Login'
import { NotFound } from './components/NotFound'
import { UserProvider } from './context/userContext.js'
import { Router } from '@reach/router'
import { Dashboard } from './containers/dashboard'
import { PrivateRoute } from './containers/PrivateRoute'
import { GoogleCalendar } from './containers/GoogleCalendar'
import { Github } from './containers/Github'
import { createGlobalStyle } from 'styled-components'

export const App = () => {
  const initialUser = {
    user: null
  }
  const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f5f5;
  }
`
  const reducer = (state, action) => {
    switch (action.type) {
      case 'setUser':
        return {
          ...state,
          user: action.user
        }
      default:
        return state
    }
  }
  return (
    <UserProvider initialState={initialUser} reducer={reducer}>
      <GlobalStyle />
      <Router>
        <Login path='/login' />
        <Signup path='/signup' />
        <PrivateRoute as={Dashboard} path='/' />
        <PrivateRoute as={GoogleCalendar} path='/googlecalendar' />
        <PrivateRoute as={Github} path='/github' />
        <NotFound default />
      </Router>
    </UserProvider>
  )
}
