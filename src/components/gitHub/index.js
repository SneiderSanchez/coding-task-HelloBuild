import React, { useEffect } from 'react'
import { ListAllRepos } from './styles'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
export const Github = props => {
  const listRepos = gql`
  {
    viewer {
      repositories(first: 100) {
        totalCount
        nodes {
          nameWithOwner
        }
        pageInfo {
          endCursor
          hasNextPage
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
  console.log('datica de git')
  console.log(data)

  return (
    <a href='https://github.com/login/oauth/authorize?client_id=59e2eb0fba1f774b5c2e&scope=use'>Listar los repos</a>
  )
}
