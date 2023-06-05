import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Project from '../pages/Project'
import Projectlist from '../pages/Project-list'

function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/project-list" element={<Projectlist />}/>
        <Route path="/project" element={<Project />}/>
    </Routes>
  )
}

export default Allroutes