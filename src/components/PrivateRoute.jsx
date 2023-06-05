import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("login")){
            navigate("/");
        }
    })
  return (
    children
  )
}

export default PrivateRoute