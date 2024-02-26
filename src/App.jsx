import React from 'react'

import MainLayout from './layouts/MainLayout/MainLayout'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './features/Register/Register'
// import Rigister from './pages/Rigister/Rigister'
// import Login from './pages/Login/Login'


const App = () => {
  return (
<>
<Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/register' element= {<Rigister/>}> </Route>
        <Route path='/*' element={<MainLayout/>}> </Route>    
      
    </Routes>
    


</>
  )


}

export default App