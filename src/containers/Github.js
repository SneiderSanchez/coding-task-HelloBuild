import React, { useEffect } from 'react'
import { Github as GitHubComponent } from '../components/gitHub'
import ApolloClient, { gql, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost'

import { useQuery, ApolloProvider } from '@apollo/react-hooks'

export const Github = props => {
  const urlParams = props.location.href
  console.log('las parasdklmjasijokd')
  console.log(urlParams)
  const getToken = () => {
    const token = window.localStorage.getItem('token')
    console.log(token ? `Bearer ${token}` : '')
    return token ? `Bearer ${token}` : ''
  }

  const defaultClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: getToken()
        }
      })
    }
  })
  /*   const defaultClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: async (operation) => {
      const token = window.localStorage.getItem('token')
      operation.setContext({
        headers: {
          authorization: token
        }
      })
    }
  }) */

  useEffect(() => {
    if (urlParams.includes('token')) {
      const temp = urlParams.split('token=')[1]
      console.log(temp)
      fetch('http://localhost:3031/github/apitoken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oauthToken: temp
        })
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          window.localStorage.setItem('token', response.token)
          console.log('Success:', response)
        })
    }
  }, [defaultClient])
  return (
    <ApolloProvider client={defaultClient}>
      <GitHubComponent />
    </ApolloProvider>
  )
}
