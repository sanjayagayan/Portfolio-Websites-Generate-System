import serviceImg from '../img/degree-hat.png'
export const Education = ()=>{
    return(
        <div className='absolute left-[55%] top-[370%]'>
        <p className='text-xl text-secondaryblue font-normal pb-6'>Education</p>
        
        <div class="grid grid-cols-2 gap-4 pt-6">
            <div>
                <img src = {serviceImg} className='inline' />
                <span className='bg-secondarypink inline rounded-md px-4 py-1 ml-4' >2020-2022</span>
                <p>Master Degree</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg} className='inline'/>
                <span className='bg-secondarypink inline rounded-md px-4 py-1 ml-4' >2014-2017</span>
                <p>College Graduate</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg} className='inline'/>
                <span className='bg-secondarypink inline rounded-md px-4 py-1 ml-4' >2017-2020</span>
                <p>Bachelor Degree</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg} className='inline'/>
                <span className='bg-secondarypink inline rounded-md px-4 py-1 ml-4' >2015-2017</span>
                <p>Course Certification</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            
        </div>
    </div>
    )

}