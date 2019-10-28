import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link }  from 'react-router-dom'

const CheeseShow = ({ match: { params: { id } } }) => {
  const [ cheese, setCheese ] = useState({})

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://cheesebored.herokuapp.com/cheeses/${id}`)
      setCheese(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(cheese)
  if (!cheese) return null
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">{cheese.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={cheese.image} alt={cheese.name} />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">Tasting Notes</h4>
            <p>{cheese.tastingNotes}</p>
            <hr />
            <h4 className="title is-4">Origin</h4>
            <p>{cheese.origin}</p>
            <hr />
    
            <>
              <Link to={`/cheeses/${cheese._id}/edit`} className="button is-warning">
                  Edit Cheese
              </Link>
              <button className="button is-danger">Delete Cheese</button>
            </>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CheeseShow