import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Project from '../pages/Project'
import Projectlist from '../pages/Project-list'
import PrivateRoute from './PrivateRoute'

function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/project-list" element={<PrivateRoute><Projectlist /></PrivateRoute>}/>
        <Route path="/project" element={<PrivateRoute><Project /></PrivateRoute>}/>
    </Routes>
  )
}

export default Allroutes