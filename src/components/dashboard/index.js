import React, { useState } from 'react'
import { Container } from './styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
/* import GithubIcon from '@material-ui/icons/Github'
import GoogleCalendarIcon from '@material-ui/icons/GoogleCalendar' */

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}
export const Dashboard = () => {
  const [value, setValue] = useState(0)

  function handleChange (event, newValue) {
    setValue(newValue)
  }

  return (
    <Container square>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='secondary'
        textColor='secondary'
      >
        <Tab label='Github' id='tab-0' aria-controls='tabpanel-0' /* icon={<GithubIcon />} */ />
        <Tab label='Google Calendar' id='tab-1' aria-controls='tabpanel-1' /* icon={<GoogleCalendarIcon />} */ />
      </Tabs>
      <TabPanel value={value} index={0}>
        Parte de Git
      </TabPanel>
      <TabPanel value={value} index={1}>
        Parte de google
      </TabPanel>
    </Container>

  )
}
