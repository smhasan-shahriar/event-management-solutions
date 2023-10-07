import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash, FaGoogle  } from "react-icons/fa";
import useAuthHook from "../hooks/useAuthHook";

const Login = () => {
  const {user, signIn, signInSocial} = useAuthHook();
  const [showPassword, setShowPassword]= useState(false)
  const handleSocialLogin = () => {
    signInSocial()
    .then(()=> {
      toast('You have successfully logged in')
    })
    .catch(error => {
      toast(error.message)
    })
  }
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    if (password.length <6){
      toast('password must contain at least 6 characters')
      return;
    }
    if(!(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/).test(password)){
      toast('Password must contain at least one capital letter and a special character');
      return;
    }
    signIn(email, password)
    .then( ()=>{
      toast('You have successfully logged in')
      
    }
     
    )
    .catch(error => {
      toast(error.message)
     
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:w-[1000px] md:w-[500px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-lg rounded-sm bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered flex-1 relative"
                    required
                  />
                  <span onClick={()=> setShowPassword(!showPassword)} className=" text-pink-400 absolute right-10">{!showPassword?<FaEye/>:<FaEyeSlash/>}</span>
                </div>
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Do not have account? Please{" "}
                <Link to="/register" className="capitalize btn btn-link p-0">
                  Register
                </Link>
              </p>
            </form>
            <ToastContainer />
            <button onClick={handleSocialLogin} className="btn btn-outline relative bottom-8 mx-20 text-blue-600">
              Log in with <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;