import React from 'react'
export const About = () => 
{
    return(
        <div>
          <div className='px-40 grid grid-cols-1 grid-row-3'>
            <div>
               <p className='text-white font-[Poppins] text-3xl font-extrabold'>About Me</p>
               <p className='text-lightblue font-[Poppins] text-2xl font-normal'>My Story</p>
            </div>
            <div className='pt-5 pr-10'>
              <p className='text-gray font-[Poppins] text-2xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              <p className='text-gray font-[Poppins] text-2xl font-normal'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            </div>
                <div className='grid grid-cols-2 grid-rows-1'>
                  <ul className=' font-[Poppins] text-2xl font-normal space-y-[20px]'>
                    <li className='flex text-lightblue'>Age : <p className='pl-4 text-white'> 25</p> </li>
                    <li className='flex text-lightblue'>Freelance : <p className='pl-4 text-white'> Available</p> </li>
                    <li className='flex text-lightblue'>Phone : <p className='pl-4 text-white'> +94 714 157 292</p> </li>
                  </ul>
                  <ul className=' text-2xl font-normal space-y-[20px]'>
                    <li className='flex text-lightblue'>Residence : <p className='pl-4 text-white'> Sri Lanka</p> </li>
                    <li className='flex text-lightblue'>Address : <p className='pl-4 text-white'> Colombo</p> </li>
                    <li className='flex text-lightblue'>Email : <p className='pl-4 text-white'> k.m.s.g.rathnayaka@gmail.com</p> </li>
                  </ul>
                </div>
            </div>
         </div>
  
    )
}

