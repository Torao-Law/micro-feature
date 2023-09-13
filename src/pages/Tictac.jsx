import React from 'react'
import { Link } from 'react-router-dom'
import TicTacToe from '../components/tictac'


export default function Tictac() {
  return (
    <div className='container'>
      <Link to='/' className='mt-5 btn btn-outline-primary px-4 py-2'>Back</Link>
      <div className='mb-4'>
        <TicTacToe />
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
                <td style={{border: "1px solid #000"}}>JavaScript is used to declare variables such as board and xIsNext which are used to manage the game state. These variables are stored in state using React's useState hook, so they can be updated and re-rendered when changes occur</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Render Square (Square Component)</td>
                <td style={{border: "1px solid #000"}}>Each square on the game board is rendered as a Square component in JavaScript. This allows the use of reusable components to draw individual boxes with similar behavior and appearance.</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Handle Click (handleClick function)</td>
                <td style={{border: "1px solid #000"}}>When the player clicks on one of the boxes, the handleClick JavaScript function is called. This function checks whether the box is filled or whether there is a winner in the current game. If there are no problems, the game board is updated with an 'X' or 'O' mark, and the next player's turn is moved</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Calculate Winner (Function calculateWinner)</td>
                <td style={{border: "1px solid #000"}}>This JavaScript function is used to determine the winner in the game. It works by checking all possible combinations that could produce a winner, such as horizontal, vertical, and diagonal rows on the game board</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Reset Game (ResetGame function)</td>
                <td style={{border: "1px solid #000"}}>The JavaScript function resetGame is used to reset the game when the player wants to start a new game. This removes all 'X' and 'O' marks from the game board and sets the first player's turn</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Tic-Tac-Toe Logic</td>
                <td style={{border: "1px solid #000"}}>JavaScript implements all of the Tic-Tac-Toe game logic, including how players can place 'X' or 'O' marks on squares, as well as how the game determines winners or draws</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Conditional Rendering</td>
                <td style={{border: "1px solid #000"}}>JavaScript digunakan untuk mengatur tampilan kondisional, seperti menampilkan pesan status permainan (giliran siapa atau pemenangnya) dan menampilkan pesan peringatan jika kotak sudah diisi atau permainan sudah berakhir</td>
                <td style={{border: "1px solid #000"}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
              </tr>
              <tr>
                <td style={{border: "1px solid #000"}}>Event Handling</td>
                <td style={{border: "1px solid #000"}}>JavaScript is also used to handle events such as box clicks by the player, so that the game can respond correctly to user input.</td>
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
