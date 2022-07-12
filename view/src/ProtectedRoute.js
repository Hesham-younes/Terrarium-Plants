import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    let token = document.cookie 
    if(!token) {
        return <Navigate to='/' />
    }
  return children
   
  
}

export default ProtectedRoute;