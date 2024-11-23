import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Generator from './components/Generator'
import Help from './components/Help'

import './App.css'

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Navbar />
      {/* <Generator /> */}
      <Help />
    </div>
  )
}

export default App
