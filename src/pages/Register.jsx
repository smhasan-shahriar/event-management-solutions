import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash, FaGoogle  } from "react-icons/fa";

const Register = () => {
  const {signUp, manageProfile, signInSocial} = useAuthHook();
  const navigate = useNavigate()
  const [showPassword, setShowPassword]= useState(false)
  const handleSocialLogin = () => {
    signInSocial()
    .then(()=> {
      navigate(location?.state ? location.state : "/");
      toast('You have successfully registered with Google')
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
      return;
    }
    if(!(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/).test(password)){
      toast('Password must contain at least one capital letter and a special character');
      return;
    }
    signUp(email, password)
    .then( ()=>{
      toast('You have successfully registered')
      manageProfile(name, image_url)
      .then(()=> {
        navigate(location?.state ? location.state : "/");
        toast('You have successfully registered with necessary info')
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
      <div className="flex min-h-[86vh] justify-center items-center bg-base-200 py-10">
        <div className="flex flex-col gap-5 md:w-[500px] w-[95vw]">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="max-w-lg shadow-lg rounded-sm bg-base-100 mx-5">
            <form onSubmit={handleSignUp} className="p-5">
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-sm md:text-base text-center my-3">
                Already have account? Please{" "}
                <Link to="/login" className="btn btn-link p-0 capitalize">
                  Log In
                </Link>
              </p>
            </form>
            <button onClick={handleSocialLogin}  className="capitalize btn btn-outline relative bottom-8 w-1/2 mx-auto text-center text-blue-600 flex">
              Register with <FaGoogle />
            </button>
          </div>
        </div>
      </div>
      
      <ToastContainer/>
    </div>
  );
};

export default Register;
