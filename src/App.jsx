import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import CurrencyConverter from './pages/CurrencyConverter'
import Countdown from './pages/CountdownTimer'
import MobileLegends from './pages/MobileLegends'
import Tictac from './pages/Tictac'
import Matching from './pages/Matching'
import Salary from './pages/Salary'
import WordScramble from './pages/WordScramble'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/currency' element={<CurrencyConverter />} />
        <Route path='/count' element={<Countdown />} />
        <Route path='/mobile-legend' element={<MobileLegends />} />
        <Route path='/tic-tac' element={<Tictac />} />
        <Route path='/matching-card' element={<Matching />} />
        <Route path='/salary' element={<Salary />} />
        <Route path='/word' element={<WordScramble />} />
      </Routes>
    </Router>
  )
}

export default App
