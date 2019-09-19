import React from 'react'
import { Signup as SignupComponent } from '../components/Signup'
import useSignUpForm from '../hooks/useSignUpForm'

export const Signup = () => {
  const signup = info => {
    Object.keys(info).forEach((key) => {
      window.localStorage.setItem(key, info[key])
    })
    window.location.reload(false)
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({ name: '', email: '', password: '' }, signup)

  return (
    <SignupComponent
      inputs={inputs}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  )
}
