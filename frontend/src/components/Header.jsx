import { assets } from "../assets/assets.js";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between font-semibold bg-black text-white pl-4 pr-6">
      {/* image */}

      <div>
        <img src={assets.Symbol} alt=""></img>
      </div>

{/* home wagera */}
      <div className="py-7">
        <ul className="hidden sm:flex md:flex lg:flex gap-3.5">
          <NavLink to="/" className={({isActive})=>{
            return isActive?"underline":""
          }}>Home</NavLink>
          <NavLink to="/courses" className={({isActive})=>(
            isActive?"underline":""
  )}>Courses</NavLink>
          <NavLink to="/contact_us" className={({isActive})=>(
            isActive?"underline":""
  )}>Contact us</NavLink>
          <NavLink to="/about" className={({isActive})=>(
            isActive?"underline":""
  )}>About us</NavLink>
        </ul>
      </div>

{/* Login Logout */}
      <div className="py-7">
        <button className="rounded-full bg-amber-50 text-black px-6 py-2 hover:bg-black hover:text-white ">Login</button>
      </div>
    </div>
  );
}

export default Header;
