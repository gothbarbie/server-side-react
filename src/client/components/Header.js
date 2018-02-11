import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  console.log('auth is ', auth)
  return (
    <nav>
      <Link to="/">React SSR</Link>
    </nav>
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
