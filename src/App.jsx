import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import CurrencyConverter from './pages/CurrencyConverter'
import Countdown from './pages/CountdownTimer'
import MobileLegends from './pages/MobileLegends'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/currency' element={<CurrencyConverter />} />
        <Route exact path='/count' element={<Countdown />} />
        <Route exact path='/mobile-legend' element={<MobileLegends />} />
      </Routes>
    </Router>
  )
}

export default App
