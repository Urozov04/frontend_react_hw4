import React from 'react'
import logo from "../../assets/DWEL®.svg"

const Header = () => {
  return (
    <header className='container mt-5'>
    <div className='flex justify-between'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex gap-2.5'>
            <button className='border rounded-[6px] p-[10px_30px]'>Signup</button>
            <button className='border rounded-[6px] p-[10px_30px]'>Signin</button>
        </div>
    </div>
    </header>
  )
}

export default Header