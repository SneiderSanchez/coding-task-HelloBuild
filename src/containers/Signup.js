import React, { useState } from 'react'
import { Signup as SignupComponent } from '../components/Signup'
import useInputForm from '../hooks/useInputForm'
import { Redirect } from '@reach/router'
const initialState = { name: '', email: '', password: '' }
export const Signup = () => {
  const [created, setCreated] = useState(false)
  const signup = info => {
    Object.keys(info).forEach((key) => {
      window.localStorage.setItem(key, info[key])
    })
    setCreated(true)
  }

  const { inputs, handleInputChange, handleSubmit } = useInputForm(initialState, signup)
  return (
    created
      ? <Redirect to='/login' noThrow />
      : <SignupComponent inputs={inputs} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
  )
}
