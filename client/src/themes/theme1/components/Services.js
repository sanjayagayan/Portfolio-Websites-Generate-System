import React from 'react'
export const Services = () => 
{ 
    const items= [
        {
            id:1,
            value:'UI UX Design'
        },
        {
            id:2,
            value:'App Development'
        },
        {
            id:3,
            value:'Web Development'
        },
        {
            id:4,
            value:'Advertising'
        },
        {
            id:5,
            value:'SEO Marketing'
        },
        {
            id:6,
            value:'Business Consulting'
        },
    ]
    return( 
        <div>
            <div className='px-40 grid grid-cols-1 grid-row-2'>
                    <div>
                        <p className='text-white font-[Poppins] text-3xl font-extrabold'>Services</p>
                        <p className='text-lightblue font-[Poppins] text-2xl font-normal'>What I do</p>
                    </div>
                    <ul className='pr-10 gap-10 grid md:grid-cols-3 grid-cols-2 grid-flow-row mt-6'>
                        {items.map(({id,value})  => (
                            <li key={id} className='text-center leading-[180px] text-white bg-transparent hover:bg-gradient-to-t from-pinkcustom to-bluecustom border-2 rounded-tl-[50px] rounded-br-[50px] border-pinkcustom cursor-pointer'>
                                <h1 className='text-2xl md:text-3xl leading-normal inline-block align-middle'>{value}</h1>
                            </li>
                        ))}
                    </ul>
                    
            </div>
        </div>
    )
}

