import { useContext } from "react"
import { ThemeContext } from "../../context_theme"

export const Skills = ()=>{
    const item = useContext(ThemeContext)
    return(
        <div className='absolute left-[55%] top-[590%]'>
            <p className='text-xl text-secondaryblue font-normal pb-6'>Skills</p>
        
                {
                    item.skills.map(
                        (skill)=>{
                            var marginVal = skill.percentage-5
                            return(
                                
                                <div className="grid grid-cols-2 gap-6 mt-2">
                                    <div className='mt-4'>{skill.name}</div>
                                    <div className='w-[500%]'>
                                        <div className={`ml-[${marginVal}%] text-secondarypink`}>{skill.percentage}%</div>
                                        <div className="bg-[#111111] rounded-full h-2.5 mt-1 ">
                                            <div className="bg-secondarypink h-2.5 rounded-full" style={{width: `${skill.percentage}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
                {/* <div className='mt-4'>HTML</div>
                <div className='w-[500%]'>
                    <div className='ml-[85%] text-secondarypink'>90%</div>
                    <div className="bg-[#111111] rounded-full h-2.5 mt-1 ">
                        <div className="bg-secondarypink h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                </div>

                <div className='mt-4'>CSS</div>
                <div className='w-[500%]'>
                    <div className='ml-[75%] text-secondarypink'>80%</div>
                    <div className="bg-[#111111] rounded-full h-2.5 mt-1 ">
                        <div className="bg-secondarypink h-2.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                </div>

                <div className='mt-4'>JavaScript</div>
                <div className='w-[500%]'>
                    <div className='ml-[65%] text-secondarypink'>70%</div>
                    <div className="bg-[#111111] rounded-full h-2.5 mt-1 ">
                        <div className="bg-secondarypink h-2.5 rounded-full" style={{width: '70%'}}></div>
                    </div>
                </div>

                <div className='mt-4'>React Js</div>
                <div className='w-[500%]'>
                    <div className='ml-[45%] text-secondarypink'>50%</div>
                    <div className="bg-[#111111] rounded-full h-2.5 mt-1 ">
                        <div className="bg-secondarypink h-2.5 rounded-full" style={{width: '50%'}}></div>
                    </div>
                </div>

                <div className='mt-4'>Vue JS</div>
                <div className='w-[500%]'>
                    <div className='ml-[55%] text-secondarypink'>60%</div>
                    <div className="bg-[#111111] rounded-full h-2.5 mt-1 ">
                        <div className="bg-secondarypink h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                </div> */}
                
               
            

        </div>


    )
}