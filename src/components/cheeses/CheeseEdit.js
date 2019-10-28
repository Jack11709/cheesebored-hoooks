import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../../lib/auth'

import CheesesForm from './CheeseForm'

const CheeseEdit = ({ history, match: { params: { id } } }) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const { data: { _id } } = await axios.put(`https://cheesebored.herokuapp.com/cheeses/${id}`, data, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      history.push(`/cheeses/${_id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://cheesebored.herokuapp.com/cheeses/${id}`)
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    < section className="section" >
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

export default CheeseEdit