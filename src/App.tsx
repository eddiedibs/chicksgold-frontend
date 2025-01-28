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
    <div className='body-parent'>
      <Body/>
    </div>
    <div className='footer-container'></div>
    </>
  )
}

export default App
