import { Link } from 'react-scroll'
export const NavBar = ()=>{
    return(
        <nav className='bg-navbg py-2.5 fixed  bg-top w-full z-20'>
            <div className=' flex flex-row justify-end py-5'>
                <ul className=' flex flex-row justify-end mt-1.5'>
                
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="home" spy={true} smooth={true} offset={50} duration={500} >
                            <div className="cursor-pointer">Home</div>
                        </Link>
                    </li>
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="about" spy={true} smooth={true} offset={50} duration={500} >
                            <div className="cursor-pointer">About</div>
                        </Link>
                    </li>
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="services" spy={true} smooth={true} offset={50} duration={500} >
                            <div className="cursor-pointer">Services</div>
                        </Link>
                    </li>
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="education" spy={true} smooth={true} offset={50} duration={500} >
                        <div className="cursor-pointer">Education</div>
                        </Link>
                    </li>
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="experience" spy={true} smooth={true} offset={50} duration={500} >
                        <div className="cursor-pointer">Experience</div>
                        </Link>
                    </li>
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="skills" spy={true} smooth={true} offset={50} duration={500} >
                        <div className="cursor-pointer">Skills</div>
                        </Link>
                    </li>
                    <li className="text-white pr-10 ">
                        <Link activeClass="text-secondarypink" to="projects" spy={true} smooth={true} offset={50} duration={500} >
                        <div className="cursor-pointer">Projects</div>
                        </Link>
                    </li>
                </ul>
                <button className='bg-secondarypink text-white mr-10 py-1.5 px-6'>
                    <Link  to="contact" spy={true} smooth={true} offset={50} duration={500} >
                        Hire Me {'>'}
                    </Link>
                 </button>
            </div>
            
        </nav>
    )
}