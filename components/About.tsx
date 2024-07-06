import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-teal-500'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>bio1</p>
                <p className='py-2 text-gray-600'>bio2</p>
                <p className='py-2 text-gray-600'>bio3</p>

                {/* add link later */}
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check it out</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img src="" alt="/" />
                {/* or use Image from nextjs to do lazy loading but need to modify config file if use external src*/}
            </div>
        </div>
    </div>
  )
}

export default About