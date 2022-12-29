import { useContext } from "react"
import { ThemeContext } from "../../context_theme"

export const About = ()=>{
    const item = useContext(ThemeContext)
    return (
        <div className='absolute left-[55%] top-[150%]'>
            <p className='text-xl text-secondaryblue font-normal pb-6'>About Me</p>
            <p className='text-base text-theme2text font-normal '>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatioas.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-6">
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Age:</div>
                    <div className='text-base text-theme2text font-normal inline'> {item.age}</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Residence:</div>
                    <div className='text-base text-theme2text font-normal inline'> {item.residence}</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Freelance:</div>
                    <div className='text-base text-theme2text font-normal inline'> {item.freelance?'Available':'Not Available'}</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Address:</div>
                    <div className='text-base text-theme2text font-normal inline'> {item.adrs}</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Phone:</div>
                    <div className='text-base text-theme2text font-normal inline'> {item.phone}</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Email:</div>
                    <div className='text-base text-theme2text font-normal inline'> {item.email}</div>
                </div>
            </div>
        </div>
    )
}