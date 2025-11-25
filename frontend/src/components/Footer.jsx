import React from 'react'
import { assets } from "../assets/assets.js";

function Footer() {
  return (
    <div className="flex flex-col gap-3.5 px-10 text-white"   style={{fontFamily:'"Comic Sans MS","Comic Sans","cursive"',background: "linear-gradient(135deg, #000000, #1a1a1a, #000000)"}}>
    
      <div >
         <img className="h-20" src={assets.Symbol} alt=""></img>
      </div>

      <div className="px-4">
        <p>Home for Programmers</p>
         <p>Made With Love by Shobhit And Abhishek</p>
      </div>


      <div className="flex justify-around bg-black py-4">
        <div>
        <p className="text-xl font-bold">Products</p>
        <li className="mx-1">
          <li className="hover:text-red-300">Courses</li>
           <li className="hover:text-red-300">cohorts</li>
            <li className="hover:text-red-300">Udemy</li>
             <li className="hover:text-red-300">Free Apis</li>
        </li>
        </div>

         <div>
          <p className="text-xl font-bold">Resources</p>
           <li className="mx-1">
          <li className="hover:text-red-300">docs</li>
           <li className="hover:text-red-300">Privacy Policy</li>
            <li className="hover:text-red-300">Terms Of Service</li>
             <li className="hover:text-red-300">Pricing Policy</li>
        </li>
        </div>

        <div>
          <p className="text-xl font-bold">Social</p>
            <li className="mx-1">
          <li className="hover:text-red-300">x.com</li>
           <li className="hover:text-red-300">Github</li>
            <li className="hover:text-red-300">Linkedin</li>
             <li className="hover:text-red-300">Instagram</li>
        </li>
        </div>

      </div>

    </div>
  )
}

export default Footer