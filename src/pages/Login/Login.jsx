


import React from 'react';
import './Login.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationUser, getAuthenticateError, getAuthenticateStatus, selectLogin } from './AuthenticationSlice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const dispatch = useDispatch();
  const authentication = useSelector(selectLogin);
  const status = useSelector(getAuthenticateStatus);
  const error = useSelector(getAuthenticateError);
  const navigate = useNavigate();

  // Define Yup schema for validation
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(authenticationUser(data));
      const token = response.payload.token;
      const user_id=response.payload.user["user_id"]
   
      
      if (token && user_id) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_id',user_id)
        
        navigate('/profile');
      } else {
        navigate('/');
      }           
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-lholder">
          <div className="inputs-holder">
            <div>
              <input 
                placeholder="Email..." 
                {...register('email')} 
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <p>{errors.email?.message}</p>
              
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password.." 
                {...register('password')} 
                onChange={(e)=>{setPassword(e.target.value)}}
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
}

export default Login;

