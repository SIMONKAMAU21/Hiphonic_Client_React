import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import './Register.scss'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser, getRegisterUserError } from "./registerSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(getRegisterUserError);

  const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "4 Chars, 1 CAPS, 1 Lowercase, 1 Num & 1 special Char"
      ),
    tagname: yup.string().required("Tagname is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-holder">
          <div className="inputs-holder">
            <div>
              <input
                placeholder="Fullname..."
                {...register("fullname")}
              />
              <p>{errors.fullname?.message}</p>
            </div>
            <div>
              <input
                placeholder="Email..."
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password.."
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>
            <div>
              <input
                placeholder="Tagname..."
                {...register("tagname")}
              />
              <p>{errors.tagname?.message}</p>
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            Remember me?
          </div>

          <div className="btn">
            <div> <button type="submit">Register</button></div>
            <div>
              <NavLink to="/">
                <button>Sign in</button>
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
