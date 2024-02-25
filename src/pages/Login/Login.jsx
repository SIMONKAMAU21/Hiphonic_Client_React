import React from 'react'
import'./Login.scss'

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

       <div className="btn">
         <button>Login</button>
       </div>
     </div>
   </form>
 </div>
);
};


export default Login