import React from 'react'
import images from "../static"

const Projects = () => {
  return (
    <div className='container mt-[120px]'>
        <h3 className='text-[17px]'>PROJECTS</h3>
        <div className='h-[2513px] grid grid-cols-2 gap-10 mt-10 max-lg:grid-cols-1'>
            {images?.map((item) => (
                <div key={item.id}>
                    <div className='w-full h-[400px] overflow-hidden'>
                        <img src={item.img} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <p className='text-2xl text-black font-medium pt-[18px]'>
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects