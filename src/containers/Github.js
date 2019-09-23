import React, { useEffect, useState } from 'react'
import { Github as GitHubComponent } from '../components/gitHub'
import { Unauthorized } from '../components/Unautorized'
import ApolloClient, { gql } from 'apollo-boost'
import { navigate } from '@reach/router'
import { ApolloProvider } from '@apollo/react-hooks'
import { Query } from 'react-apollo'

export const Github = props => {
  const urlParams = props.location.href
  const reposQuery = gql`
  {
    viewer {
      login
      avatarUrl
      repositories(first: 100) {
        totalCount
        nodes {
          owner {
            login
            avatarUrl
          }
          nameWithOwner
          description
        }
      }
    }
  }`
  const [loading, setLoading] = useState(false)
  const getToken = () => {
    const token = window.localStorage.getItem('token')
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
  const handleLogout = async () => {
    const temp = window.localStorage.removeItem('token')
    /*     const deleteToken = await fetch(`https://github.com/applications/59e2eb0fba1f774b5c2e/tokens/${temp}`, {
      method: 'DELETE'
    })
    const response = await deleteToken.json()
    console.log(response) */
    navigate('/')
  }

  const getApiToken = async () => {
    try {
      const token = urlParams.split('token=')[1]
      const requestEvents = await fetch('http://localhost:3031/github/apitoken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oauthToken: token
        })
      })
      const response = await requestEvents.json()
      window.localStorage.setItem('token', response.token)
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (urlParams.includes('token')) {
      getApiToken()
    }
  }, [])
  return (
    <ApolloProvider client={defaultClient}>
      {
        window.localStorage.getItem('token') && loading
          ? (
            <Query query={reposQuery}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`
                if (data) return <GitHubComponent handleLogout={handleLogout} data={data.viewer} />
              }}
            </Query>
          ) : (
            <Unauthorized type='github' />
          )
      }
    </ApolloProvider>
  )
}
