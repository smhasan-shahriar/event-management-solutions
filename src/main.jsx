import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import MainAuth from './Authentication/MainAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainAuth>
      <RouterProvider router = {Routes}></RouterProvider>
    </MainAuth>
  </React.StrictMode>,
)
