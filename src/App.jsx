import { useState } from 'react'
import './App.css'
import Info from './Info'
import Buttons from './Buttons'
import About from './About'
import Interests from './Interests'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Info/>
      <Buttons/>
      <About/>
      <Interests/>
    </div>
  )
}

export default App
