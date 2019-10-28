import React from 'react'

const CheesesForm = ({ data, handleChange, handleSubmit, errors }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className={`input ${errors.name ? 'is-danger' : ''}`}
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
      {errors.name && <small className="help is-danger">{errors.name}</small>}
    </div>
    <div className="field">
      <label className="label">Origin</label>
      <div className="control">
        <input
          className={`input ${errors.origin ? 'is-danger' : ''}`}
          placeholder="Origin"
          name="origin"
          onChange={handleChange}
          value={data.origin || ''}
        />
      </div>
      {errors.origin && <small className="help is-danger">{errors.origin}</small>}
    </div>
    <div className="field">
      <label className="label">Image</label>
      <div className="control">
        <input
          className={`input ${errors.image ? 'is-danger' : ''}`}
          placeholder="Image"
          name="image"
          onChange={handleChange}
          value={data.image || ''}
        />
      </div>
      {errors.image && <small className="help is-danger">{errors.image}</small>}
    </div>
    <div className="field">
      <label className="label">Tasting Notes</label>
      <div className="control">
        <textarea
          className="textarea"
          placeholder="Tasting Notes"
          name="tastingNotes"
          onChange={handleChange}
          value={data.tastingNotes || ''}
        />
      </div>
    </div>
    <button type="submit" className="button is-warning is-fullwidth">Make my Cheese</button>
  </form>
)

export default CheesesForm