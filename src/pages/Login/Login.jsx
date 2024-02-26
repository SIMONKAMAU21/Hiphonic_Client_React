import React from 'react'
import'./Login.scss'
import { NavLink } from 'react-router-dom';

import { authenticationUser } from './AuthenticationSlice';


const Login = () => {
 

  
  return (
   <div>
   <form>
     <div className="form-holder">
       <div className="inputs-holder">
         <div>
           <input placeholder="Email..." />
         </div>
         <div>
           <input placeholder="Password.." />
         </div>
         
       </div>

      <NavLink to='/timeline' className='btn'>
            <input type="submit" value="Login"/>
      </NavLink>
     </div>
   </form>
 </div>
);
};


export default Login