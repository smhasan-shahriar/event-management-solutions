import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuthHook from '../hooks/useAuthHook';

const NavBar = () => {
  const {user, logOut} = useAuthHook();
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }

    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/experiences">Customer Experiences</NavLink></li>
    <li><NavLink to="/support">Get Support</NavLink></li>
    {!user && <li><NavLink to="/register">Register</NavLink></li>}
    </>
    return (
        <div className=' bg-red-100'>
            <div className="navbar max-w-[1360px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
       
      </ul>
    </div>
    <img className='md:w-28 w-14' src="https://i.ibb.co/hVVJ4jV/event-management-logo.jpg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="md:navbar-end">
    {
      user ? <>
          <div className='flex items-center gap-5'>
            <p className='text-sm md:text-lg'>{user.displayName}</p>
            <img className="w-10 h-10 object-cover rounded-full" src={user.photoURL} />
            <Link onClick={handleLogOut} className="btn capitalize">Log Out</Link>
          </div>
      
      </>  :  <Link to="/login" className="btn">Log In</Link>
    }
   
  </div>
</div>
        </div>
    );
};

export default NavBar;