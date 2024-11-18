import { useState } from 'react'
import Navbar from './components/Navbar'
import Generator from './components/Generator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Generator />
    </div>
  )
}

export default App
