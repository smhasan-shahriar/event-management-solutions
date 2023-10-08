import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash, FaGoogle  } from "react-icons/fa";
import useAuthHook from "../hooks/useAuthHook";


const Login = () => {
  const {signIn, signInSocial} = useAuthHook();
  const [showPassword, setShowPassword]= useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSocialLogin = () => {
    signInSocial()
    .then(()=> {
      toast('You have successfully logged in.')
      setTimeout(function() {
        navigate(location?.state ? location.state : "/");
      }, 3000);
      
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
      e.target.reset()
      return;
    }
    if(!(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/).test(password)){
      toast('Password must contain at least one capital letter and a special character');
      e.target.reset(); 
      return;
    }
    signIn(email, password)
    .then( ()=>{
      toast('You have successfully logged in')
      setTimeout(function() {
        navigate(location?.state ? location.state : "/");
      }, 3000);
      
    }
     
    )
    .catch(error => {
      toast(error.message)
      
     
    })
    e.target.reset(); 
    
  }
  return (
    <div>
      <div className="flex justify-center items-center max-w-[1360px] bg-base-200 py-10">
        <div className="flex flex-col gap-5 lg:w-[1000px] md:w-[500px] w-[95vw]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="max-w-lg shadow-lg rounded-sm bg-base-100 mx-5">
            <form onSubmit={handleLogIn} className="p-5">
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                    type={showPassword? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <span onClick={()=> setShowPassword(!showPassword)} className=" text-pink-400 absolute right-4 bottom-4">{!showPassword?<FaEye/>:<FaEyeSlash/>}</span>
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-sm md:text-base text-center my-3">
                Do not have account? Please{" "}
                <Link to="/register" className="capitalize btn btn-link p-0">
                  Register
                </Link>
              </p>
            </form>
            <button onClick={handleSocialLogin} className="capitalize btn btn-outline relative bottom-8 w-1/2 mx-auto text-center text-blue-600 flex">
              Log in with <FaGoogle />
            </button>
          </div>
          
          <ToastContainer autoClose={3500} />
        </div>
      </div>
    </div>
  );
};

export default Login;
