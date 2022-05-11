import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/:horarioJson" element={<App />} />
        <Route path="/" element={<App />} />
    </Routes>
  )
}

export default AppRouter