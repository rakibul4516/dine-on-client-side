import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Auth/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
