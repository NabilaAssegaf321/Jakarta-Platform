import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-jakarta-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Jakarta Platform</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </div>
  )
}

export default App
