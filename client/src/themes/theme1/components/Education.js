import React from 'react'
export const Education = () => 
{ 
    const items= [
        {
            id:1,
            year:"2022-2020",
            value:'Master Degree',
            name: "school",
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss ksaskk aksdsad sads.'
        },
        {
            id:2,
            year:"2022-2020",
            value:'Bachelor Degree',
            name: "build-outline",
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss ksaskk aksdsad sads.'
        },
        {
            id:3,
            year:"2022-2020",
            value:'College Graduate',
            name: "build-outline",
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss ksaskk aksdsad sads.'
        },
        {
            id:4,
            year:"2022-2020",
            value:'Course Certified',
            name: "build-outline",
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss ksaskk aksdsad sads.'
        },
    ]
    return( 
        <div>
            <div className='px-40 grid grid-cols-1 grid-row-2'>
                    <div>
                        <p className='text-white font-[Poppins] text-3xl font-extrabold'>Education</p>
                        <p className='text-lightblue font-[Poppins] text-2xl font-normal'>Studied At</p>
                    </div>
                    <ul className='gap-10 grid md:grid-cols-3 grid-cols-2 grid-flow-row mt-6'>
                        {items.map(({id,value,year,desc,name})  => (
                            <li key={id} className='text-left pl-5 py-[40px] leading-[20px] text-white bg-transparent hover:bg-gradient-to-t from-bluecustom to-bluecustom border-2 border-black cursor-pointer'>
                                <ion-icon name={name} size="large"></ion-icon>
                                <p className='font-normal text-1xl align-middle'>{year}</p>
                                <h1 className='text-3xl leading-normal inline-block align-middle'>{value}</h1>
                                <p className=' font-normal text-1xl align-middle mr-5'>{desc}</p>
                            </li>
                        ))}
                    </ul>
                    
            </div>
        </div>
    )
}
