import { Link } from '@reach/router'
import styled from 'styled-components'
import { Box, CardContent, Avatar } from '@material-ui/core'

export const ButomContainer = styled(Box)`
align-items:center;
justify-content:center;
display:flex;
`
export const ContainerProfile = styled(CardContent)`
display:flex;
`
export const AvatarProfile = styled(Avatar)`
margin-right:10px
`

export const LinkHome = styled(Link)`
    color: #000;
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;
`
