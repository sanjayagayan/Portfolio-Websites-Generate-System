import React from 'react'
import { useContext } from "react"
import './Home.css'
import ProfileImage from './assets/ProfileImage.png'
import Behance from './assets/behance.png'
import Dribble from './assets/dribble.png'
import Linkedin from './assets/linkedin.png'
import Pinterest from './assets/pinterest.png'

import { ThemeContext } from "../../context_theme"

export const Home = () => {

   const item = useContext(ThemeContext)

  return (  
        <div className='h-screen md:flex w-full bg-transparent top-0 left-0'>
              <div className='pt-40 px-40 gap-x-[40px] 2xl:gap-x-20 grid grid-cols-1 sm:grid-cols-2 grid-row-1 items-center' >
                    <div className=''>
                        <div className='flex font-extrabold gap-x-2'>
                          <p className='text-[70px] sm:text-[78px] text-white '>Hi,I'm</p>
                          <p className='font-extrabold text-[70px] text-white pl-3  2xl:text-[80px]'>{item.fname}</p>
                        </div>
                        <div className='flex font-extrabold text-white gap-x-2 '>
                          <p className='text-[60px] 2xl:text-[80px]'>a</p>
                          <p className='text-lightblue font-extrabold text-[60px] 2xl:text-[80px] '>UI/UX Designer</p>
                        </div>
                        <p className=' font-normal my-4 text-desccolor text-2xl 2xl:text-3xl  w-[400px] md:w-[450px] leading-12'>I use animation as a third dimension by which to simplify experiences and kindling through each and every interaction. </p>
                        <button className= 'bg-gradient-to-t from-pinkcustom to-bluecustom hover:from-bluecustom hover:to-pinkcustom ... font-[Poppins] text-1xl lg:w-[200px] mt-0 md:mt-3 py-3 md:py-3 px-10 rounded-[20px] lg:h-[50px] text-white'>Download CV</button>
                    </div >
                    <div className='flex items-center justify-center align-middle'>
                       <div className='mt-[-40px] grid grid-row-4 '>
                          <img src={Behance} className='w-[95px] h-[95px] ml-[130px] 2xl:ml-[280px]'alt="Skill"/>
                          <img src={Dribble} className='w-[95px] h-[95px] ml-[60px] 2xl:ml-[180px]'alt="Skill"/>
                          <img src={Linkedin} className='w-[95px] h-[95px] mt-[8px] 2xl:mt-[40px] ml-[60px] 2xl:ml-[170px]'alt="Skill"/>
                          <img src={Pinterest} className=' w-[95px] h-[95px] mt-[0px] ml-[110px] 2xl:mt-[30px] 2xl:ml-[220px]'alt="Skill"/>
                       </div>
                       <img className='mr-10 md:ml-0 w-[400px] h-[480px] 2xl:w-[550px] 2xl:h-[600px]' src={ProfileImage} alt="User" />
                    </div>
              </div>
        </div>
  )

}




