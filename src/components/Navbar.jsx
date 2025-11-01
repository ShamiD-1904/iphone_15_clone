import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import {navLists} from "../constants"

const Navbar = () => {
  return (
    <header className="w-full, py-5, sm:px-10, px-10, flex justify-between items-center">
        <nav className="flex w-full screen-max-width px-100">
            <img src={appleImg} alt="apple logo" width={14} height={18}></img>

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav, i) => (
                    <div key={nav} className="px-5 text-sm cursor-pointer text-gray transition-all hover:text-white">
                        {nav}
                    </div>
                )
            )}
            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt='search' width={18} height={18}></img>

                <img src={bagImg} alt='bag image' width={18} height={18}></img>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
