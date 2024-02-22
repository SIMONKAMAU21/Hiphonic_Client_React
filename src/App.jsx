import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header/Header'
import MainLayout from './layouts/MainLayout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
     <MainLayout/>

    </div>
  )
}

export default App
