import React from 'react'
import { Link } from 'react-router-dom'
import Mobile from '../components/mobile-legend'

export default function MobileLegends() {
  return (
    <div className='container mb-5'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div>
        <h5 className='text-center mt-3'>Featuring Mobile Legend Heroes</h5>
        <p className='m-0'>Show all the lists of mobile legend heroes from Api which are provided below. and create a feature to search for relevant mobile legend heroes from input tags (https://api.dazelpro.com/mobile-legends/hero) :</p>
      </div>

      <h5 className='text-center mb-3 mt-5'>Learning Objectives</h5>
      <div className='border border-1 rounded-3'>
        <table style={{border: '1px solid #000', width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr>
              <th scope="col" className='text-center' style={{border: "1px solid #000"}}>Topics</th>
              <th scope="col" className='text-center'style={{border: "1px solid #000"}}>Explanation</th>
              <th scope="col" className='text-center'style={{border: "1px solid #000"}}>isDone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: "1px solid #000"}}>Variable & DOM</td>
              <td style={{border: "1px solid #000"}}>How do I get the input value from a DOM selection stored in a variable. And displays html object manipulation using DOM</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Fetch API (Asynchronous)</td>
              <td style={{border: "1px solid #000"}}>To perform a Fetch API to retrieve hero data from an external API and apply the following non-blocking function to handle a promise from the added link</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Conditional (IF Else)</td>
              <td style={{border: "1px solid #000"}}>To ensure that the data received is an array and if not then the data received continues to be converted into an array</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Looping (ForEach)</td>
              <td style={{border: "1px solid #000"}}>To do an iteration of the hero list</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Operator</td>
              <td style={{border: "1px solid #000"}}>To do an iteration of the hero list</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Event Listener (Callback)</td>
              <td style={{border: "1px solid #000"}}>To handle an action when triggering a button</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Function</td>
              <td style={{border: "1px solid #000"}}>To handle every process of hero appearance so that it can appear in visual form</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='my-5'>
        <h5 className='text-center mb-3'>Submit your work</h5>
        <form>
          <div className="mb-3">
            <input type="url" className="form-control mb-3" id="exampleInputEmail1" placeholder='Input your github link' />
            <input type="url" className="form-control mb-3" id="exampleInputEmail1" placeholder='Input your vercel link' />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      
      <div className='my-4'>
        <h5 className='text-center my-5'>Try Output</h5>
        <Mobile />
      </div>
    </div>
  )
}
