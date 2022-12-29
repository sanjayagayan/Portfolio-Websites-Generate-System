import { useContext } from "react"
import { ThemeContext } from "../../context_theme"
import headerNameImg from '../img/hncontainer.png'
export const Home = ()=>{
    const item = useContext(ThemeContext)
    return(
        <>
            <div className='z-10 absolute left-[35%] top-[25%]'>
                <img src = {headerNameImg} className='w-3/4 h-3/4 ' />
                        
                <div className='absolute top-[25%] left-[12%]'>
                    <p className='text-9xl font-extrabold'>{item.fname}</p>
                    <p className='text-7xl font-extrabold pl-14'>{item.lname}</p>
                </div>           
            </div>

            <div className='absolute top-[75%] left-[55%] z-10'>
                <p className='text-xl text-secondaryblue font-normal pb-6'>SOFTWARE ENGINEER</p>
                <p className='text-base text-theme2text font-normal /'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatioas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
                </p>
            </div>
            <button className='bg-secondarypink py-2 px-7 absolute top-[98%] left-[55%] rounded-[15px]'>
                Download CV
            </button>
        </>
        
    );
}