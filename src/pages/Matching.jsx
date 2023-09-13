import React from 'react'
import { Link } from 'react-router-dom'
import MatchingGame from '../components/matching-card'


export default function Matching() {
  return (
    <div className='container'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div className='mb-4'>
        <MatchingGame />
      </div>

      <div className=''>
        <h4 className='text-center mb-3'>LEARNING OBJECTIVES</h4>
        <div className='border border-1 rounded-3'>
          <table style={{border: '1px solid #000', width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr>
                <th scope="col" className='text-center'>Topics</th>
                <th scope="col" className='text-center'>Explanation</th>
                <th scope="col" className='text-center'style={{border: "1px solid #000"}}>isDone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: "1px solid #000"}}>State / Variable</td>
                <td style={{border: "1px solid #000"}}>to store data items that will be displayed on the card</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Spread Operator</td>
                <td style={{border: "1px solid #000"}}>Manipulate the array if the data sent has changes, either the data is the same or the data entered is different</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>HOF</td>
                <td style={{border: "1px solid #000"}}>Manipulate the data if it is a stored array on the card</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Conditioning</td>
                <td style={{border: "1px solid #000"}}>To check the matching game</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Operator</td>
                <td style={{border: "1px solid #000"}}>To help with conditioning as a comparison or logic</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>useEffect</td>
                <td style={{border: "1px solid #000"}}>For side effects when the matching game component has a change in action</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Looping</td>
                <td style={{border: "1px solid #000"}}>To perform data filtering if the page is refreshed to provide a format latest in gaming</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
