import mainImg from'../img/main.png'
import fbImg from '../img/facebook.png'
import ldImg from '../img/linkedin.png'
import waImg from '../img/whatsapp.png'
import instaImg from '../img/insta.png'
import { Element , Link} from 'react-scroll'
import { Home } from './home'
import { About } from './about'
import { Services } from './services'
import { Education } from './education'
import { Experience } from './experience'
import { Skills } from './skills'
import { Projects } from './projects'
import { Contact } from './contact'
import { CopyWright } from './copyright'
export const Layout = ()=>{
    return(
       <div className='h-screen flex'>
 
            <div className="w-1/2 h-full fixed">
                <img src={mainImg} />
                <div className=' text-white absolute left-0 bottom-0 w-full h-[10%] bg-theme2bg/50'>
                    <div className='flex justify-center mt-4'>
                        <div className='rounded-full bg-secondarypink w-10 h-10 mr-3 '>
                            <img src = {fbImg} className='w-2/3 h-2/3 ml-[6px] mt-[6px]'/>
                        </div>
                        <div className='rounded-full bg-secondarypink w-10 h-10 mr-3'>
                            <img src = {ldImg} className='w-2/3 h-2/3 ml-[6px] mt-[6px]'/>
                        </div>
                        <div className='rounded-full bg-secondarypink w-10 h-10 mr-3'>
                            <img src = {waImg} className='w-2/3 h-2/3 ml-[6px] mt-[6px] '/>
                        </div>
                        <div className='rounded-full bg-secondarypink w-10 h-10 mr-3'>
                            <img src = {instaImg} className='w-2/3 h-2/3 ml-[6px] mt-[6px]'/>
                        </div>
                       
                    </div>
                </div>
            </div>
           {/* <img className="lg:w-1/2 lg:h-full lg:fixed sm:w-full" src={mainImg}/> */}
           
            <div className=" w-full static">
              
                <Element name="home" className="element h-[110%] bg-theme2bg text-white">
                    <Home/>
                </Element>
                <Element name="about" className="element h-[110%] bg-theme2bg text-white">
                    <About/>
                </Element>
                 <Element name="services" className="element h-[110%] bg-theme2bg text-white ">
                    <Services/>
                </Element>
                  
                <Element name="education" className="element h-[110%] bg-theme2bg text-white">
                   <Education/>
                </Element>
                <Element name="experience" className="element h-[110%] bg-theme2bg text-white">
                    <Experience/>
                </Element>
               <Element name="skills" className="element h-[110%] bg-theme2bg text-white">
                    <Skills/>
                </Element>
                <Element name="projects" className="element h-[110%] bg-theme2bg text-white">
                    <Projects/>
                </Element>
                <Element name="contact" className="element h-[110%] bg-theme2bg text-white">
                    <Contact/>    
                </Element>
                <div className="element h-[30%] bg-theme2bg text-white">
                    <CopyWright/>
                </div>
                
            </div>
        </div>
   
    )
}