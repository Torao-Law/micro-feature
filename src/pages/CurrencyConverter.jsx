import React from 'react'
import Currency from '../components/currency'
import { Link } from 'react-router-dom'


export default function CurrencyConverter() {
  return (
    <div className='container mb-5'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div className='mb-4'>
        <Currency />
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
              <td style={{border: "1px solid #000"}}>How do I get the input value from a DOM selection stored in a variable. And displays html object manipulation using the DOM</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Type Data (Object)</td>
              <td style={{border: "1px solid #000"}}>Create dummy data as a reference for converting total currency values ​​according to current regulations</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Conditional (IF Else)</td>
              <td style={{border: "1px solid #000"}}>To handle a valid input to match the data required when converting</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Operator</td>
              <td style={{border: "1px solid #000"}}>To handle changes in currency values ​​according to the value stored in the dummy</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
            <tr>
              <td style={{border: "1px solid #000"}}>Function</td>
              <td style={{border: "1px solid #000"}}>To handle each conversion process so that it can appear in display form</td>
              <td style={{border: "1px solid #000"}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-5'>
        <h5 className='text-center mb-3'>Submit your work</h5>
        <form>
          <div className="mb-3">
            <input type="url" className="form-control mb-3" id="exampleInputEmail1" placeholder='Input your github link' />
            <input type="url" className="form-control mb-3" id="exampleInputEmail1" placeholder='Input your vercel link' />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}