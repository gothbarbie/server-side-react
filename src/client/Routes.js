import React from 'react'
import Home from './components/Home'
import UsersList, { loadData } from './components/UsersList'

// This allows us to use react-router-config, unfortunately no JSX allowed
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
]
