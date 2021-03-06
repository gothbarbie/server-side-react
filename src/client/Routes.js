import React from 'react'

import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

// This allows us to use react-router-config, unfortunately no JSX allowed
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage, // has 'component' prop inside it
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage, // has 'component' and 'loadData' inside it
        path: '/users'    
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
