export const Loading = ()=>{
    return(
        <div className='bg-white w-full h-full relative'>
            <div className='absolute left-[43%] top-[250px]'>
                <span className='text-6xl font-black animate-pulse'>Porfolio</span>
                <span class=" ml-5 relative inline-flex rounded-full h-3 w-3 bg-sky-500 animate-ping"></span>
            </div>    
        </div>
    )
}