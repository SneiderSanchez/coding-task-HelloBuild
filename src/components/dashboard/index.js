import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
/* import GithubIcon from '@material-ui/icons/Github'
import GoogleCalendarIcon from '@material-ui/icons/GoogleCalendar' */

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

export const Dashboard = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange (event, newValue) {
    setValue(newValue)
  }

  return (
    <Paper square className={classes.root}>
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
    </Paper>
  )
}
