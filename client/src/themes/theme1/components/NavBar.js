import { Link, Element} from 'react-scroll'
import { Home } from './Home';
import { About } from './About';
import { Services} from './Services';
import { Education } from './Education';
import { Portfolio } from './Portfolio/Portfolio'
import { Contact } from './Contact';
import { Skills } from './Skills/Skills';
import { useState } from 'react';
import Button from '../components/Button';

export const NavBar = () =>{

    let [open,setOpen] = useState(false)

    return (
        <>
            <div className='relative w-full bg-transparent top-0 left-0'>
                <nav className="fixed md:flex items-center justify-between bg-gradient-to-b from-[#07325d] to-[#00000000] backdrop-blur-xl max-sm:backdrop-blur-xl pt-5 pb-5 md:px-40 px-10 w-full ">
                    <div className='font-bold text-2xl cursor-pointer flex items-center'>
                        <Link activeClass="active" to="/">
                                 <p className='text-5xl text-white pb-2 font-extrabold'>Portfolio</p>          
                        </Link>
                    </div>
                    <div onClick={()=>setOpen(!open)} className='text-5xl absolute right-8 top-7 cursor-pointer md:hidden'>
                        <ion-icon style={{color:'white'}} name={open ? 'close':'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex max-sm:bg-hero-pattern mt-3 md:items-center md:pb-3 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        <Link activeClass='active' to="home" smooth={true} offset={0} duration={500} >
                            <li className='md:ml-8 text-xl text-white md:my-0 my-7 cursor-pointer'>Home</li>
                        </Link>
                        <Link activeClass='active' to="about" smooth={true} offset={30} duration={500} >
                            <li className='md:ml-8 text-xl text-white md:my-0 my-7 cursor-pointer'>About</li>
                        </Link>
                        <Link activeClass='active' to="services" smooth={true} offset={40} duration={500} >
                            <li className='md:ml-8 text-xl text-white md:my-0 my-7 cursor-pointer'>Services</li>
                        </Link>
                        <Link activeClass='active' to="education" smooth={true} offset={50} duration={500} >
                            <li className='md:ml-8 text-xl text-white md:my-0 my-7 cursor-pointer'>Education</li>
                        </Link>
                        <Link activeClass='active' to="portfolio" smooth={true} offset={60} duration={500} >
                            <li className='md:ml-8 text-xl text-white md:my-0 my-7 cursor-pointer'>Portfolio</li>
                        </Link>
                        <Link activeClass='active' to="skill" smooth={true} offset={70}  duration={500} >
                            <li className='md:ml-8 text-xl text-white md:my-0 my-7 cursor-pointer'>Skills</li>
                        </Link>
                        <Link activeClass='active' to="contact" smooth={true} offset={80} duration={500} >
                            <Button>Hire Me</Button> 
                        </Link>     
                    </ul>
                </nav>

                <Element name="home" className="element">
                         <Home/>
                </Element>
                <Element name="about" className="element">
                         <About/>
                </Element>
                <Element name="services" className="element">
                         <Services/>
                </Element>
                <Element name="education" className="element">
                         <Education/>
                </Element>
                <Element name="portfolio" className="element">
                         <Portfolio/>
                </Element>
                <Element name="skill" className="element">
                         <Skills/>
                </Element>
                <Element name="contact" className="element">
                         <Contact/>
                </Element>   
            </div>
        </>
    )
}










