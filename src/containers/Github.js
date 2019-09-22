import React, { useEffect } from 'react'
import { Github as GitHubComponent } from '../components/gitHub'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const Github = props => {
  const urlParams = props.location.href
  console.log('las parasdklmjasijokd')
  console.log(urlParams)
  useEffect(() => {
    if (urlParams.includes('token')) {
      const temp = urlParams.split('token=')[1]
      console.log(temp)
      fetch(`https://github.com/login/oauth/access_token?client_id=59e2eb0fba1f774b5c2e&client_secret=fadba40e98ae3bdf917c81032cc76fc2fb8f6b6e&code=${temp}`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    }
  })

  if (props.token) {
    const listRepos = gql`
    {
      search(type: REPOSITORY, query: "language:Javascript", first: 10) {
        nodes {
          ... on Repository {
            id
            nameWithOwner
            url
            descriptionHTML
          }
        }
      }
    }
    `
    const { loading, error, data } = useQuery(listRepos)

    if (loading) {
      console.log('loading')
    }
    if (error) {
      console.log('Error :(')
      console.log(error)
    }
    console.log(data)
  } else {
    console.log('no hay codigo :(')
  }
  /*   useEffect(() => {
  }) */
  return (
    <GitHubComponent />
  )
}
