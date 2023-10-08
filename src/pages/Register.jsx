import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash, FaGoogle  } from "react-icons/fa";

const Register = () => {
  const {user, signUp, manageProfile, signInSocial} = useAuthHook();
  const navigate = useNavigate()
  const [showPassword, setShowPassword]= useState(false)
  const handleSocialLogin = () => {
    signInSocial()
    .then((result)=> {
      toast('You have successfully registered with Google')
        setTimeout(function() {
          navigate(location?.state ? location.state : "/");
        }, 3000);
    })
    .catch(error => {
      toast(error.message)
    })
  }
  const handleSignUp= (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const image_url = form.get('image')
    const email = form.get('email')
    const password = form.get('password')
    if (password.length <6){
      toast('password must contain at least 6 characters')
      e.target.reset()
      return;
    }
    if(!(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/).test(password)){
      toast('Password must contain at least one capital letter and a special character');
      e.target.reset()
      return;
    }
    signUp(email, password)
    .then( ()=>{
      toast('You have successfully registered')
      manageProfile(name, image_url)
      .then(()=> {
        toast('You have successfully registered with necessary info')
        setTimeout(function() {
          navigate(location?.state ? location.state : "/");
        }, 3000);
      })
      .catch(error => {
        toast(error.message)
      })
      e.target.reset()
      
    }
     
    )
    .catch(error => {
      toast(error.message)
      e.target.reset()
     
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:w-[1000px] md:w-[500px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-lg rounded-sm bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have account? Please
                <Link to="/login" className="btn btn-link p-0 capitalize">
                  Log In
                </Link>
              </p>
            </form>
            <ToastContainer autoClose={3500}/>
            <button onClick={handleSocialLogin}  className="capitalize btn btn-outline relative bottom-8 mx-20 text-blue-600">
              Register with <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
