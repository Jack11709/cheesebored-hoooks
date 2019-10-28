import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CheeseCard from './CheeseCard'

const CheeseIndex = () => {
  const [cheeses, setCheeses] = useState([])

  const getData = async () => {
    try {
      const { data } = await axios.get('https://cheesebored.herokuapp.com/cheeses')
      setCheeses(data)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {cheeses.map(cheese => <CheeseCard key={cheese._id} {...cheese}/>)}
        </div>
      </div>
    </section>
  )
}

export default CheeseIndex