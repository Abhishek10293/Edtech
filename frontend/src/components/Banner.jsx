import React from 'react'
import {assets} from '../assets/assets.js'

function Banner() {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-around">
        <div className="px-4">
        <p className="pt-20 text-5xl">Where Learning Meets Belonging</p>
        <p className="pt-10 pl-2 text-xl">Brainware — Your gateway to modern tech skills.
Learn, build, and level-up for the future.</p>

<button className="mt-4 px-1.5 rounded-full ml-2 py-1.5 bg-white text-black ">Start Learning</button>
        </div>
        <div className="px-4">
        <img src={assets.BannerImg} alt=""/>
        </div>
      </div>
     
    </div>
  )
}

export default Banner