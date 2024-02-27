import React from "react";
import "./Register.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectRegisterUser, getRegisterUserStatus, getRegisterUserError, registerUser } from "./registerSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Register = () => {
  const dispatch = useDispatch();
  const status = useSelector(getRegisterUserStatus)
  const errror = useSelector(getRegisterUserError)
  const registrionResponse = useSelector(selectRegisterUser)
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [tagname, settagname] = useState("")
  const [email, setemail] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("please fill in both fields")
    } else {
      console.log(username)
      dispatch(registerUser({
        username: e.target[0].value, email: e.target[1].value, tagname: e.target[2].value, password: e.target[3].value
      }))
      e.target.reset();
      navigate("/")

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-holder">
          <div className="inputs-holder">
            <div>
              <input placeholder="fullnames..."
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value)

                }}
              />
            </div>
            <div>
              <input placeholder="Email..."
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />
            </div>
            <div>
              <input placeholder="Password.."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}

              />
            </div>
            <div>
              <input placeholder="Tagname..."
                value={tagname}
                onChange={(e) => {
                  settagname(e.target.value)
                }}

              />
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            Remember me?
          </div>

          <div className="btn">
            <div>  <button type="submit">Register </button></div>
            <div>
              <NavLink to="/">
                <button>Sign up</button>
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
