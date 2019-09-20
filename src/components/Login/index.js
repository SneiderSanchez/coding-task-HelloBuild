import React from 'react'
import { Container, Card, Title, LoginBtn, Anchor, Alert, Input } from './styles'
export const Login = props => {
  const {
    inputs,
    handleSubmit,
    handleInputChange,
    loginError
  } = props

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Card>
          <Title>inicia sesion</Title>
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
          <LoginBtn variant='contained' color='primary' type='submit'>
            Iniciar sesion
          </LoginBtn>
          {loginError.error ? <Alert>{loginError.message}</Alert> : null}
          <Anchor to='/signup'>No tienes cuenta?</Anchor>
        </Card>
      </form>
    </Container>

  )
}
