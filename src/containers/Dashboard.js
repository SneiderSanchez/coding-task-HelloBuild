import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import { useUserValue } from '../context/userContext'

import { Dashboard as DashboardComponent } from '../components/dashboard'

export const Dashboard = props => {
  const urlParams = props.location.href
  const [{ user }, dispatch] = useUserValue()
  useEffect(() => {
    if (urlParams) {
      if (urlParams.includes('googleapis')) {
        navigate(`/googlecalendar?token=${urlParams.split('access_token=')[1].split('&')[0]}`)
      } else if (urlParams.includes('code')) {
        navigate(`/github?token=${urlParams.split('code=')[1]}`)
      }
    }
  }, [urlParams])

  const [value, setValue] = useState(0)
  function handleChange (event, newValue) {
    setValue(newValue)
  }

  function handleLogout () {
    dispatch({
      type: 'setUser',
      user: null
    })
  }

  return (
    <DashboardComponent value={value} handleChange={handleChange} handleLogout={handleLogout} />
  )
}
