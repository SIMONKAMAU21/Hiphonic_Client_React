import React from 'react'
import'./Login.scss'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authenticationUser } from './AuthenticationSlice';


const Login = () => {
  const dispatch=useDispatch()
  const authentication=useSelector(authenticationUser);
  const status=useSelector(authe)

  
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