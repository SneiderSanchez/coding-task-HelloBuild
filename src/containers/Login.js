import React, { useState } from 'react'
import { Login as LoginComponent } from '../components/Login'
import useInputForm from '../hooks/useInputForm'
import { useUserValue } from '../context/userContext'
import { Redirect } from '@reach/router'

export const Login = props => {
  const [{ user }, dispatch] = useUserValue()
  const [logged, setLogged] = useState(false)
  const [error, setError] = useState({ error: false, message: '' })
  const loginCallback = info => {
    const localStorageEmail = window.localStorage.getItem('email')
    const localStoragePassword = window.localStorage.getItem('password')
    if (localStorageEmail === info.email && localStoragePassword === info.password) {
      alert('Paso la prueba')
      dispatch({
        type: 'setUser',
        user: {
          email: localStorageEmail,
          password: localStoragePassword
        }
      })
      setLogged(true)
    } else {
      setError({ error: true, message: 'Email o contraseña invalidos' })
    }
  }
  const { inputs, handleInputChange, handleSubmit } = useInputForm({ email: '', password: '' }, loginCallback)
  return (
    logged
      ? <Redirect to='/' noThrow />
      : <LoginComponent loginError={error} inputs={inputs} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
  )
}
