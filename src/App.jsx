import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Menu from './components/Menu'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Rooms from './components/Rooms'
import About from './components/About'
import Ours from './components/Ours'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Menu/>
        <Banner/>
        <Rooms/>
        <About/>
        <Ours/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
