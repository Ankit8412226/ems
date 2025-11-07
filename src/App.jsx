import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/pages/login'
import AuthPage from './assets/pages/AuthPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Login /> */}
        <AuthPage />
      </div>
    </>
  )
}

export default App
