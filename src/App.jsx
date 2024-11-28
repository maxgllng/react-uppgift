import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Networks from './pages/Networks'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Networks" element={<Networks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
