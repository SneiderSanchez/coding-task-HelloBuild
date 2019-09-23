import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { Link } from '@reach/router'

export const ContainerCalendar = styled(Paper)`
    padding-top: 7px;
    margin: 20px 40px;
    text-align: center;
    height: 95vh;
`
export const LinkHome = styled(Link)`
    color: #000;
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;
`
export const Title = styled.h1`
    display: inline-block;
    color: white;
    background-color: #3f51b5;
    padding: 5px;
    border-radius: 5px;
`
