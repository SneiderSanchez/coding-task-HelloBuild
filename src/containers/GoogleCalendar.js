import React, { useEffect, useState } from 'react'
import { GoogleCalendar as GoogleCalendarComponent } from '../components/GoogleCalendar'
import { navigate } from '@reach/router'

export const GoogleCalendar = props => {
  const urlParams = props.location.href
  const [events, setEvents] = useState([])
  async function requestGoogleCalendarEvents () {
    const token = urlParams.split('token=')[1]
    try {
      const request = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyD9A8R0a7Bauq098JN8mP_AXvEsh17ptRo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json'
        }
      })
      const { items } = await request.json()
      const calendarEvents = items.map((event) => {
        return {
          id: event.id,
          title: event.summary,
          start: new Date(event.start.date || event.start.dateTime),
          end: new Date(event.end.date || event.end.dateTime)
        }
      })
      setEvents(calendarEvents)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (urlParams.includes('token') && !events.length) {
      requestGoogleCalendarEvents()
    }
  }, [])

  const handleLogout = async () => {
    try {
      const token = urlParams.split('token=')[1]
      await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`, { method: 'POST' })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <GoogleCalendarComponent handleLogout={handleLogout} events={events} />
  )
}
