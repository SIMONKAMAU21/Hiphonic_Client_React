import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'
import Login from './pages/Login/Login.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Register from './features/Register/Register.jsx'



const router=createBrowserRouter([
  { 
    path:'/',
    element:<Login/>,
    // errorElement:<NotFound/>
    
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/*',
    element:<MainLayout/>
  }
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <Provider store={store}>
     <RouterProvider router={router}>
        <App/>
     </RouterProvider>
     </Provider>
    
  </React.StrictMode>,
)
