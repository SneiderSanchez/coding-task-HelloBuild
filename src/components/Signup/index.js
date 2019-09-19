import React from 'react'
import { Container, Card, Title, SignUpBtn, Input } from './styles'
export const Signup = props => {
  const {
    inputs,
    handleSubmit,
    handleInputChange
  } = props

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Card>
          <Title>inicia sesion</Title>
          <Input
            id='passwordSignup'
            name='name'
            /* helperText='nombre' */
            /* error={touched.password && Boolean(errors.password)} */
            value={inputs.name}
            label='Nombre'
            type='text'
            margin='normal'
            variant='outlined'
            onChange={handleInputChange}
            required
          />
          <Input
            id='emailSignup'
            name='email'
            /* helperText='email' */
            /* error={touched.email && Boolean(errors.email)} */
            value={inputs.email}
            label='Correo electronico'
            type='email'
            margin='normal'
            variant='outlined'
            onChange={handleInputChange}
            required
          />
          <Input
            id='passwordLogin'
            name='password'
            /* helperText='Contraseña' */
            /* error={touched.password && Boolean(errors.password)} */
            value={inputs.password}
            label='Contraseña'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleInputChange}
            required
          />
          <button type='submit'>Sign Up</button>
        </Card>
      </form>
    </Container>
  )
}
