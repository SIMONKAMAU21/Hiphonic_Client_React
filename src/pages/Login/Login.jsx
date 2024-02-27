import React, { useState } from 'react';
import './Login.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationUser, getAuthenticateError, getAuthenticateStatus, selectLogin } from './AuthenticationSlice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const dispatch=useDispatch()
  const authentication=useSelector(selectLogin);
  const status=useSelector(getAuthenticateStatus);
  const error=useSelector(getAuthenticateError);
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate()





<<<<<<< HEAD
  //handle submit

=======
>>>>>>> a17631117da8e631165a0cf0155ebf998276dd76
  const handleLogin  =async(e)=>{
      e.preventDefault()
      if(email==='' && password===''){
           alert('all fields are required');
      }
      else{
        try {
          console.log(email,password)
          const response=await dispatch(authenticationUser({email,password}));
          console.log(response.payload.user.user_id)
          console.log(response.payload.token);

          const token=response.payload.token;
          const user_id=response.payload.user.user_id;
          
          //save the token to localstorage
           if(token&&user_id){
             localStorage.setItem('token',token)
              navigate('/profile');
           }
           else{
              navigate('/')
            
           }           
        } catch (error) {
          console.log(error)
        }
       
                  
      }

<<<<<<< HEAD
  }
  
  
=======

>>>>>>> a17631117da8e631165a0cf0155ebf998276dd76
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-lholder">
          <div className="inputs-holder">
            <div>
              <input 
                placeholder="Email..." 
                {...register('email')} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password.." 
                {...register('password')} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <div className='btn'>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
