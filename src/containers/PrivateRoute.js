import React, { useEffect } from 'react'
import { Login } from '../containers/Login'
import { useUserValue } from '../context/userContext'

export const PrivateRoute = props => {
  // para el cambio de vista puede implementarse un loader
  const [{ user }, dispatch] = useUserValue()
  useEffect(() => {
    const localStorageEmail = window.localStorage.getItem('email')
    const localStoragePassword = window.localStorage.getItem('password')
    if (localStorageEmail && localStoragePassword) {
      dispatch({
        type: 'setUser',
        user: {
          email: localStorageEmail,
          localStoragePassword: localStoragePassword
        }
      })
    }
  }, [])
  const { as: Comp, ...data } = props
  return user ? <Comp {...data} /> : <Login />
}
