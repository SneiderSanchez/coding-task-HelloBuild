import React from 'react'
import { ContainerCalendar, LinkHome, Title } from './styles'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Unauthorized } from '../Unautorized'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'
moment.locale('es')
const localizer = momentLocalizer(moment)

export const GoogleCalendar = ({ events, handleLogout }) => {
  const nextMonth = moment().add(1, 'months')
  return (
    <>
      {
        events.length ? (
          <ContainerCalendar>
            <LinkHome to='/'>Home </LinkHome>
            <span onClick={() => handleLogout()}>Cerrar sesion</span>
            <div>
              <Title>Eventos</Title>
            </div>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor='start'
              endAccessor='end'
              style={{ width: '80%', height: '70vh', margin: '0 auto' }}
              defaultDate={new Date(nextMonth.format('YYYY-MM-DD'))}
            />
          </ContainerCalendar>
        ) : (
          <Unauthorized type='google' />
        )
      }
    </>
  )
}
