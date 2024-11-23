import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Generator from './components/Generator'

import './App.css'

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Navbar />
      <Generator />
    </div>
  )
}

export default App
