import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

const Navbar = ({ location: { pathname }, history }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">CheeseBored <span role="img" aria-label="icon">🧀</span></Link>
          <span
            className={`navbar-burger ${open ? 'is-active' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/cheeses">Discover our Cheeses</Link>
            {isAuthenticated() &&
              <>
                <Link className="navbar-item" to="/cheeses/new">Add a new Cheese</Link>
                <span className="navbar-item" onClick={handleLogout}>Logout</span>
              </>
            }
            {!isAuthenticated() &&
              <>
                <Link className="navbar-item" to="/register">Register</Link>
                <Link className="navbar-item" to="/login">Login</Link>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)