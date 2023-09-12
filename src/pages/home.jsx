import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='container py-5'>
      <div className='border border-primary border-3 rounded-2 p-5 mx-auto' style={{width: "100%", height: "90vh"}}>
        <h3 className='text-center'>Challange on Task</h3>
        <p className='text-center'>Select and complete the tasks already provided below</p>
        
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Count Duration</h5>
            <p className="card-text">
              <p className='m-0'>Level : <span>Medium</span></p>
              <p className='m-0'>Language : <span>JavaScript, React</span></p>
              <p className='m-0'>What did you learn : Variable & DOM, Type Data, Conditional, Operator, Function, Date(), setInterval()</p>              
              </p>
            <a href="/count" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Currency Convert</h5>
            <p className="card-text">
              <p className='m-0'>Level : <span>Medium</span></p>
              <p className='m-0'>Language : <span>JavaScript, React</span></p>
              <p className='m-0'>What did you learn : Variable & DOM, Type Data, Conditional, Operator, Function</p>              
              </p>
            <a href="/currency" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>
      </div>
    </div>
  )
}
