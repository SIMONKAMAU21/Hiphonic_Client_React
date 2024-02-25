import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'



const router=createBrowserRouter([
  { 
    // path:'/',
    // element:<Login/>,
    // // errorElement:<NotFound/>
    
  },
  {
    path:'/*',
    element:<MainLayout/>
  }
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
     
       <RouterProvider router={router}/>
  </React.StrictMode>,
)
