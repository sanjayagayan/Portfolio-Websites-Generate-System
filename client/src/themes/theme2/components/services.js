import { useContext } from "react"
import { ThemeContext } from "../../context_theme"
import serviceImg from '../img/service.png'
export const Services = ()=>{
    const item = useContext(ThemeContext)
    return(
        <div className='absolute left-[55%] top-[260%]'>
        <p className='text-xl text-secondaryblue font-normal pb-6'>Services</p>
        
        <div class="grid grid-cols-2 gap-4 pt-6">
           
            {
                item.services.map(
                    (service)=>{
                        return(
                            <div>
                                <img src = {serviceImg}/>
                                <p>{service.name}</p>
                                <p className='text-theme2text'>{service.desc}</p>
                            </div>
                        )
                    }
                )
            }
            {/* <div>
                <img src = {serviceImg}/>
                <p>App Development</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg}/>
                <p>UI/UX Design</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg}/>
                <p>IOT Development</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div> */}
            
        </div>
    </div>
    )

}