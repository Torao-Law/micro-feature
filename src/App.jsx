import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import CurrencyConverter from './pages/CurrencyConverter'
import Countdown from './pages/CountdownTimer'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/currency' element={<CurrencyConverter />} />
        <Route exact path='/count' element={<Countdown />} />
      </Routes>
    </Router>
  )
}

export default App
