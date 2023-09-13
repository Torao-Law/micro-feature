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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/currency' element={<CurrencyConverter />} />
        <Route exact path='/count' element={<Countdown />} />
        <Route exact path='/mobile-legend' element={<MobileLegends />} />
        <Route exact path='/tic-tac' element={<Tictac />} />
        <Route exact path='/matching-card' element={<Matching />} />
        <Route exact path='/salary' element={<Salary />} />
        <Route exact path='/word' element={<WordScramble />} />
      </Routes>
    </Router>
  )
}

export default App
