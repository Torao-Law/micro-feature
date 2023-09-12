import React from 'react'
import Currency from '../components/currency'
import { Link } from 'react-router-dom'


export default function CurrencyConverter() {
  return (
    <div className='container'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div className='mb-4'>
        <Currency />
      </div>

      <div className=''>
        <h4 className='text-center mb-3'>LEARNING OBJECTIVES</h4>
        <div className='border border-1 rounded-3'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className='text-center'>Topics</th>
                <th scope="col" className='text-center'>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Variable & DOM</td>
                <td>How do I get the input value from a DOM selection stored in a variable. And displays html object manipulation using the DOM</td>
              </tr>
              <tr>
                <td>Type Data (Object)</td>
                <td>Create dummy data as a reference for converting total currency values ​​according to current regulations</td>
              </tr>
              <tr>
                <td>Conditional (IF Else)</td>
                <td>To handle a valid input to match the data required when converting</td>
              </tr>
              <tr>
                <td>Operator</td>
                <td>To handle changes in currency values ​​according to the value stored in the dummy</td>
              </tr>
              <tr>
                <td>Function</td>
                <td>To handle each conversion process so that it can appear in display form</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


// Andi adalah seorang pelancong yang berencana pergi ke berbagai negara. Dia ingin memiliki alat untuk mengkonversi mata uang dengan mudah saat dia berada di luar negeri. Anda diminta untuk membuat program konversi mata uang sederhana untuk membantunya. Pada konversi tersebut andi memiliki informasi yang wajib digunakan USD -> .85 EUR, .75 GBP, 14300 IDR. EUR -> 1.18 USD, .89 GBP, 16859.5 IDR. GBP -> 1.33 USD, 1.12 EUR, 19066.67 IDR. IDR -> 0.00007 USD, 0.000059 EUR, 0.000052 GBP.

// 1. Data yang disediakan harus berbentuk object / array.
// 2. Gunakan useState untuk menampung nilai inputan dan dari form input dan menyimpan object ataupun nilai yang relevan.
// 3. Gunakanlah salah satu methode pengkondisian untuk melakukan pengecekan untuk menghindari bilamana jika mata uang yang dikonversikan sama dengan mata uang hasil konversi sejenis.
// 4. Buatlah perhitungan perjumlahan dari nilai inputan dengan data yang sudah disiapkan.
//    Buatlah fungsi untuk menghandle semuanya
// 5. Panggil komponen yang dibuat pada komponen <app />