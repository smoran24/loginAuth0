import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './Login'
import LogoutButton from './Logout'
import Profile from './Profile'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {isAuthenticated ? (
          <>
          <LogoutButton/>
          <Profile/>
          </>
        ) : (<LoginButton/>)}
      </div>
    </>
  )
}

export default App
