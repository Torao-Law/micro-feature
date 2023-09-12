import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='container py-5'>
      <div className='border border-primary border-3 rounded-2 p-5 mx-auto' style={{width: "100%", height: "90vh"}}>
        <h3 className='text-center'>Challange on Task</h3>
        <p className='text-center'>Select and complete the tasks already provided below</p>
        <div className='d-flex justify-content-center'>
          <Link to="/count" className='btn btn-outline-primary px-4 rounded rounded-5 me-3'>Count Duration</Link>
          <Link to="/currency" className='btn btn-outline-primary px-4 rounded rounded-5'>Currency Convert</Link>
        </div>
        <div></div>
        <div className="mx-auto mt-5" style={{width: "100px"}}>
          <img 
            src='https://img.freepik.com/free-vector/red-prohibited-sign-no-icon-warning-stop-symbol-safety-danger-isolated-vector-illustration_56104-912.jpg?w=826&t=st=1694441747~exp=1694442347~hmac=a668b56652348c7919e9c54fa94ae17d65f861ee6a97ac3836cb7eef90bdc33b'
            style={{width: "100%"}}
            alt='dont-image' />
        </div>
        <p className='mt-3 text-center'>It is prohibited to use "ChatGPT" to work on this project.</p>
      </div>
    </div>
  )
}
