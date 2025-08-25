import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2 bg-blue-700">
        <div className="left text-white text-2xl">Portfolio</div>
        <div className="right">
         <ul className='flex gap-3 text-white'>
            <li><a href="#" className='hover:text-blue-500 text-[18px]'>Home</a></li>
            <li><a href="#" className='hover:text-blue-500 text-[18px]'>About</a></li>
            <li><a href="#" className='hover:text-blue-500 text-[18px]'>Portfolio</a></li>
            <li><a href="#" className='hover:text-blue-500 text-[18px]'>Contact</a></li>

         </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
