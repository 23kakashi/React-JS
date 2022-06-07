import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PreHome from '../pages/PreHome'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PreHome />}/>
      
    </Routes>
  )
}

export default MainRoutes