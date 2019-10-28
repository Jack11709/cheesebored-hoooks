import React, { useState } from 'react'
import axios from 'axios'

const Register = ({ history }) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = ({ target: { name, value } }) => setData({ ...data, [name]: value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('https://cheesebored.herokuapp.com/register', data)
      history.push('/cheeses')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className={`input ${errors.username ? 'is-danger' : '' }`}
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            {errors.username && <small className="help is-danger">{errors.username}</small>}
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={`input ${errors.email ? 'is-danger' : '' }`}
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            {errors.email && <small className="help is-danger">{errors.email}</small>}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className={`input ${errors.password ? 'is-danger' : ''} `}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            {errors.password && <small className="help is-danger">{errors.password}</small>}
          </div>
          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input
                className={`input ${errors.passwordConfirmation ? 'is-danger' : '' } `}
                name="passwordConfirmation"
                type="password"
                placeholder="Password Confirmation"
                onChange={handleChange}
              />
            </div>
            {errors.passwordConfirmation && <small className="help is-danger">{errors.passwordConfirmation}</small>}
          </div>
          <button type="submit" className="button is-warning is-fullwidth">Register</button>
        </form>
      </div>
    </section>
  )
}

export default Register