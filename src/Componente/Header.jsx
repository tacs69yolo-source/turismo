import React from 'react'
import tutu from '../assets/Tutu.jpeg'

const Header = () => {
  return (
        <div className="h-135 w-full hover:scale-100 duration-300 ease-in-out bg-cover bg-center bg-[url(https://www.clarin.com/img/2023/12/07/4Oiud0zVl_1256x620__1.jpg)]">
          
            <img  className='w-35 h-35 justify-self-end p-4 mr-35' src={tutu} alt="" />
          
            <p className='justify-self-star text-7xl italic font-serif  text-shadow-amber-900 text-center'>
                TURISMO ESQUEL
            </p>
            <h3 className='justify-self-star text-center'>
                Patagonia Argentina
            </h3>
        </div>
  )
}

export default Header
