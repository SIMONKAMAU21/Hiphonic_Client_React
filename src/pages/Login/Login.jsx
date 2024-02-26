import React from 'react'
import'./Login.scss'
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  authenticationUser, getAuthenticateError, getAuthenticateStatus, selectLogin } from './AuthenticationSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch=useDispatch()
  const authentication=useSelector(selectLogin);
  const status=useSelector(getAuthenticateStatus);
  const error=useSelector(getAuthenticateError);
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate()





  //handle submit

  const handleLogin  =async(e)=>{
      e.preventDefault()
      if(email==='' && password===''){
           alert('all fields are required');
      }
      else{
        try {
          const response=await dispatch(authenticationUser({email,password}));
          console.log(response.payload.token);

          const token=response.payload.token;

          //save the token to localstorage
           if(token){
             localStorage.setItem('token',token)
              navigate('/profile')
           }
           else{
              navigate('/')
            
           }           
        } catch (error) {
          console.log(error)
        }
       
                  
      }

  }
  
  
  return (
   <div>
   <form onSubmit={handleLogin}>
     <div className="form-holder">
       <div className="inputs-holder">
         <div>
           <input placeholder="Email..." 

           value={email}
           onChange={(e)=>{setEmail(e.target.value)}}          
  
           />
         </div>
         <div>
           <input placeholder="Password.." 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
           
           />
         </div>
         
       </div>

      {/* <NavLink to='/timeline' className='btn'> */}
            <input type="submit" value="Login"/>
      {/* </NavLink> */}
     </div>
   </form>
 </div>
);
};


export default Login