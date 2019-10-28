import React, { useState } from 'react'
import axios from 'axios'
import { getToken } from '../../lib/auth'

import CheesesForm from './CheeseForm'

const CheeseNew = ({ history }) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const { data: { _id } } = await axios.post('https://cheesebored.herokuapp.com/cheeses', data, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      history.push(`/cheeses/${_id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    < section className = "section" >
      <div className="container">
        <CheesesForm
          data={data}
          errors={errors}
          handleChange={({ target: { name, value } }) => setData({ ...data, [name]: value })}
          handleSubmit={handleSubmit}
        />
      </div>
    </section >
  )
}

export default CheeseNew