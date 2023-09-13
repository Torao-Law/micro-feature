import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='container py-5'>
      <div className='border border-primary border-3 rounded-2 p-5 mx-auto' style={{width: "100%"}}>
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
        
        <div className="card mb-3">
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

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Mobile Legend</h5>
            <p className="card-text">
              <p className='m-0'>Level : Hard</p>
              <p className='m-0'>Language : JavaScript, React</p>
              <p className='m-0'>What did you learn : Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)</p>              
              </p>
            <a href="/mobile-legend" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>
       
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Tic Tac Toe</h5>
            <p className="card-text">
              <p className='m-0'>Level : Hard</p>
              <p className='m-0'>Language : JavaScript, React</p>
              <p className='m-0'>What did you learn : Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)</p>              
              </p>
            <a href="/tic-tac" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>
        
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Matching Card</h5>
            <p className="card-text">
              <p className='m-0'>Level : Hard</p>
              <p className='m-0'>Language : JavaScript, React</p>
              <p className='m-0'>What did you learn : Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)</p>              
              </p>
            <a href="/matching-card" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Salary Calculating</h5>
            <p className="card-text">
              <p className='m-0'>Level : Easy</p>
              <p className='m-0'>Language : JavaScript, React</p>
              <p className='m-0'>What did you learn : Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)</p>              
              </p>
            <a href="/salary" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Word Scramble</h5>
            <p className="card-text">
              <p className='m-0'>Level : Easy</p>
              <p className='m-0'>Language : JavaScript, React</p>
              <p className='m-0'>What did you learn : Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)</p>              
              </p>
            <a href="/salary" className="btn btn-primary" target='_blank'>Solve Challenge</a>
          </div>
        </div>
      </div>
    </div>
  )
}
