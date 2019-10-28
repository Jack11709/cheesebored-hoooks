import React, { useState } from 'react'
import axios from 'axios'
import { setToken } from '../../lib/auth'

const Login = ({ history }) => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  const handleChange = ({ target: { name, value } }) => setData({ ...data, [name]: value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data: { token } } = await axios.post('https://cheesebored.herokuapp.com/login', data)
      setToken(token)
      history.push('/cheeses')
    } catch (err) {
      setError('Invalid Credentials')
    }
  }

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={`input ${error ? 'is-danger' : ''}`}
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className={`input ${error ? 'is-danger' : ''} `}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          {error && <small className="help is-danger">{error}</small>}
          <button type="submit" className="button is-warning is-fullwidth">Sign In</button>
        </form>
      </div>
    </section>
  )
}

export default Login