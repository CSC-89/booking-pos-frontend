import { useState } from 'react'
import './App.css'
import LoginContext from './contexts/LoginContext'

function App() {
  const [loginStatus, setLoginStatus] = useState<boolean>(true);

  return (
    <>
      <LoginContext.Provider value={loginStatus}>

    </LoginContext.Provider>
    </>
  )
}

export default App
