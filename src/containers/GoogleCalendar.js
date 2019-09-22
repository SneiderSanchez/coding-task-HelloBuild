import React, { useEffect } from 'react'
import { GoogleCalendar as GoogleCalendarComponent } from '../components/GoogleCalendar'

export const GoogleCalendar = props => {
  const urlParams = props.location.href
  console.log('las parasdklmjasijokd')
  console.log(urlParams)

  useEffect(() => {
    if (urlParams.includes('token')) {
      const temp = urlParams.split('token=')[1]
      console.log(temp)
      fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyD9A8R0a7Bauq098JN8mP_AXvEsh17ptRo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${temp}`,
          'content-type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    }
  })
  const handleLogout = () => {
    const temp = urlParams.split('token=')[1]
    fetch(`https://accounts.google.com/o/oauth2/revoke?token=${temp}`, {
      method: 'POST'
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  }

  return (
    <GoogleCalendarComponent handleLogout={handleLogout} />
  )
}
