import React from 'react'
import { Link } from 'react-router-dom'
import Word from '../components/word'

export default function WordScramble() {
  return (
    <div className='container'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div className='mb-4'>
        <Word />
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
                <td style={{border: "1px solid #000"}}>Variable & State Management</td>
                <td style={{border: "1px solid #000"}}>Untuk menyimpan data dummy yang akan ditampilkan juga data inputan dari user dan data yang diacak untuk ditampilkan</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>HOF</td>
                <td style={{border: "1px solid #000"}}>Untuk melakukan manipulasi data dengan text inputan dari user</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>useEffect</td>
                <td style={{border: "1px solid #000"}}>Sebagai efek samping ketika ada perubahan data untuk memberi tau score yang akan selalu di update ketika nilainya betul</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Conditional</td>
                <td style={{border: "1px solid #000"}}>Untuk menghandle sebuah inputan agar sesuai dengan apa yang di simpan</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Looping</td>
                <td style={{border: "1px solid #000"}}>Untuk mengubah nilai string menjadi nilai array</td>
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
