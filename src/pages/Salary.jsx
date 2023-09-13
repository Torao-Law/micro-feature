import React from 'react'
import { Link } from 'react-router-dom'
import SalaryCalculate from '../components/salary'


export default function Salary() {
  return (
    <div className='container'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div className='mb-4'>
        <SalaryCalculate />
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
                <td style={{border: "1px solid #000"}}>Untuk menyimpan data gaji, tunjangan, dan kewajiban pokok</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr> 
              <tr>
                <td style={{border: "1px solid #000"}}>Operator</td>
                <td style={{border: "1px solid #000"}}>Untuk melakukan manipulasi jumlah gaji yang dimasukan user</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Function</td>
                <td style={{border: "1px solid #000"}}>Muntuk membuat format angka secara default</td>
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
