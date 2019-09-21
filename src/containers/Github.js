import React, { useEffect } from 'react'
import { Github as GitHubComponent } from '../components/gitHub'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const Github = props => {
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
    alert('no hay codigo :(')
  }
  /*   useEffect(() => {
  }) */
  return (
    <GitHubComponent />
  )
}
