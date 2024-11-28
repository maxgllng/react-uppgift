import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Networks from './pages/Networks'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Networks" element={<Networks />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
