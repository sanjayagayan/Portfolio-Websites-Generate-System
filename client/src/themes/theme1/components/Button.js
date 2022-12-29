import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-t from-pinkcustom to-bluecustom hover:from-bluecustom hover:to-pinkcustom ... font-[Poppins] py-2 px-8 rounded-[17px] md:ml-8 text-white font-normal 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
