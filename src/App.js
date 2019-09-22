import React from 'react'
import { Signup } from './containers/Signup'
import { Login } from './containers/Login'
import { NotFound } from './components/NotFound'
import { UserProvider } from './context/userContext.js'
import { Router } from '@reach/router'
import { Dashboard } from './components/dashboard'
import { PrivateRoute } from './containers/PrivateRoute'
import { GoogleCalendar } from './containers/GoogleCalendar'
import { Github } from './containers/Github'

export const App = () => {
  const initialUser = {
    user: null
  }
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
