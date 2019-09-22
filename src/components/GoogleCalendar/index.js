import React from 'react'

export const GoogleCalendar = props => {
  return (
    <div>
      <a href='https://accounts.google.com/o/oauth2/v2/auth?client_id=518400307134-0apm0q64ss1fbfpm6mvoorvbgm2j5qfs.apps.googleusercontent.com&response_type=token&scope=https://www.googleapis.com/auth/calendar.events&redirect_uri=http://localhost:8080'>Listar los Eventos</a>
      <a onClick={() => props.handleLogout()}>Cerrar sesion</a>

    </div>

  )
}
