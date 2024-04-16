import React from 'react'
import './Forms.css'

const Forms = () => {
  return (
    <>
      <div className='form-container'>
        <form action="" className="form">
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <button className="form-button">Register</button>
        </form>
      </div>
    </>
  )
}

export default Forms