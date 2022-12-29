import contactImg from '../img/contact.png'
export const Contact = ()=>{
    return(
        <div className='absolute left-[55%] top-[810%] '>
            <p className='text-xl text-secondaryblue font-normal pb-6'>Contact</p>
            <div className="grid grid-cols-2 gap-0">
                <div>
                    <div class="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-white">Base input</label>
                        <input type="text" id="base-input" className="bg-theme2bg border border-secondarypink text-white text-sm rounded-lg focus:ring-secondarypink focus:border-secondarypink block w-full p-2.5  dark:placeholder-gray-400   "/>
                    </div>
                    <div class="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-white">Base input</label>
                        <input type="text" id="base-input" className="bg-theme2bg border border-secondarypink text-white text-sm rounded-lg focus:ring-secondarypink focus:border-secondarypink block w-full p-2.5  dark:placeholder-gray-400   "/>
                    </div>
                   <div>
                    
                        <label for="message" className="block mb-2 text-sm font-medium text-white ">Message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-white bg-theme2bg rounded-lg border border-secondarypink focus:ring-secondarypink focus:border-secondarypink " placeholder="To Write"></textarea>

                   </div>
                   <button className='bg-secondarypink text-white px-4 py-1 rounded-xl mt-4'>Send Message</button>
                </div>
                <div>
                    <img src={contactImg} className='w-full'  />
                </div>
            </div>
           
        </div>
    )
    
}