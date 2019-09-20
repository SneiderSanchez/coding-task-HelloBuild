import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from '@reach/router'
import TextField from '@material-ui/core/TextField'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  padding-right: 70px;
  min-width: 400px;
  height: 500px;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  text-transform: Capitalize;
  font-size: 25px;
  text-align: center;
`

export const LoginBtn = styled(Button)`
  align-self: center;
  margin-top: 15px !important;
`

export const SignUpBtn = styled(Link)`
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  color: #000;
`

export const Alert = styled.p`
  text-align: center;
  color: red;
  font-weight: 700;
`

export const Input = styled(TextField)`
  width: 70%
`
export const Anchor = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-top: 10px;
  color: #000;
`
