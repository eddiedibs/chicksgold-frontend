import { useState } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar-parent'>
      <NavBar/>
    </div>
    <Body/>
    </>
  )
}

export default App
