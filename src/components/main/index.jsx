import React from 'react'
import Girl from "../../assets/IMAGE.svg"
import video from "../../assets/IMAGE (1).svg"

const Main = () => {
  return (
    <section>
        <div className='container mt-5'>
            <div className='relative'>
                <img src={Girl} alt="" />
            <div className='absolute flex inset-0 justify-center items-center'>
                <button className='p-6 bg-white'> <img src={video} alt="" /> </button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Main