import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            padding: '20px',
            marginBottom: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Link
            to="/"
            style={{
              marginRight: '20px',
              color: '#4a90e2',
              textDecoration: 'none',
            }}
          >
            页面一
          </Link>
          <Link
            to="/second"
            style={{ color: '#4a90e2', textDecoration: 'none' }}
          >
            页面二
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
