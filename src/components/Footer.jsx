import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left Section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores similique ut dolores voluptas itaque cum fugit facere architecto a beatae, numquam dicta amet quasi dolorum illum error tenetur ull</p>
            </div>
            {/* center Section */}
            <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            {/* Right Section */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2'>
                <li>+9188888888888</li>
                <li>asishsahu946@gmail.com</li>
            </ul>
            </div>
        
        </div>
    </div>
  )
}

export default Footer