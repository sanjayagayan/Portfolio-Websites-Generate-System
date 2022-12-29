import React from 'react'
import ContactImage from './assets/CoImage.png'
export const Contact = () => 
{
    return(
        <div>
            <div className='px-40 grid grid-cols-1 grid-row-2'>
                    <div>
                        <p className='text-white text-3xl font-extrabold'>Contact</p>
                        <p className='text-lightblue text-2xl font-normal'>Let's Talk</p>
                    </div>
                    <div className='grid grid-cols-2 align-middle items-center justify-center'>
                    <form classname=''>
                        <div className="mb-6">
                            <label for="name" className="block mb-2 text-sm font-medium text-white ">Name</label>
                            <input type="text" id="name" className="bg-darkblue border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 " placeholder="eg:- sanjayagayan" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-white ">Email Address</label>
                            <input type="email" id="email" className="bg-darkblue border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 " placeholder="eg:- sanjayagayan@gmail.com"  required />
                        </div>
                        <div className='mb-6'>
                            <label for="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray bg-darkblue rounded-lg border border-gray focus:ring-blue focus:border-blue " placeholder="To Write..."></textarea>
                        </div>
                        <button type="submit" className="text-white bg-gradient-to-t from-pinkcustom to-bluecustom hover:from-bluecustom hover:to-pinkcustom ... focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-[17px] text-sm w-full sm:w-auto px-8 py-2.5 text-center ">Send Message</button>
                    </form>
                    <div>
                        <img src={ContactImage} alt="" className='w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto h-full sm:h-auto md:h-auto lg:h-auto xl:h-auto 2xl:h-auto'/>
                    </div>
                    </div>
            </div>
        </div>
    )
}

