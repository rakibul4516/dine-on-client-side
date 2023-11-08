import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Auth/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
