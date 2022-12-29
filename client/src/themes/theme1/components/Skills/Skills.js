import React from 'react'
import CircleProgressBar from './CircleProgressBar'

export const Skills = () => 
{ 

    const skillsList= [
        {
            id:1,
            percentage: 40,
            value: "HTML"
        },
        {
            id:2,
            percentage: 50,
            value:'CSS'
        },
        {
            id:3,
            percentage: 72,
            value:'JAVASCRIPT'
        },
        {
            id:4,
            percentage: 49,
            value:'REACTJS'
        },
        {
            id:5,
            percentage: 81,
            value:'FLUTTER'
        },
        {
            id:6,
            percentage: 90,
            value:'MYSQL'
        },
        {
            id:7,
            percentage: 90,
            value:'PHP'
        },
        {
            id:8,
            percentage: 60,
            value:'JAVA'
        },
    ]

    const items= [
        {
            id:1,
            title: "YEAR OF EXPERIENCE",
            value: "5+",
        },
        {
            id:1,
            title: "YEAR OF EXPERIENCE",
            value: "50+"
        },
        {
            id:1,
            title: "YEAR OF EXPERIENCE",
            value: "50+"
        },
        {
            id:1,
            title: "YEAR OF EXPERIENCE",
            value: "50+"
        },
    ]
    

    return( 
        <div>
            <div className='px-40 grid grid-cols-1 grid-row-3'>
                    <div>
                        <p className='text-white font-[Poppins] text-3xl font-extrabold'>Skills</p>
                        <p className='text-lightblue font-[Poppins] text-2xl font-normal'>Design & Programming</p>
                    </div>
                    <ul className='gap-10 grid md:grid-cols-4 grid-cols-2 grid-flow-row mt-6'>
                        {skillsList.map(({id,percentage,value})  => (
                            <CircleProgressBar key={id} percentage={percentage} skillName={value}/>
                        ))}
                    </ul> 
                    <ul className='gap-[60px] grid md:grid-cols-4 grid-cols-2 grid-flow-row'>
                        {items.map(({id,value,title})  => (
                            <li key={id} className=' p-10 text-center text-white bg-transparent border-2 border-pinkcustom cursor-pointer'>
                                <h1 className='text-4xl font-bold align-middle'>{value}</h1>
                                <h3 className='text-1xl align-middle' >{title}</h3>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

