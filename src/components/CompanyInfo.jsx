import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FaAngleDoubleUp } from "react-icons/fa";

const CompanyInfo = () => {

    const handleTopOfPage = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mx-2 my-10 mt-40 text-sm'>
                <div className="">
                    <Logo />
                    <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-400">
                        Magni asperiores eveniet perferendis, unde corrupti ea suscipit quaerat quasi quae reprehenderit?
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className="flex flex-row sm:flex-col justify-around gap-4 sm:gap-1 text-gray-600 dark:text-gray-400">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className="flex flex-row sm:flex-col justify-around gap-4 sm:gap-1 text-gray-600 dark:text-gray-400">
                        <li>+1-234-567-8901</li>
                        <li>contact@spubba.com</li>
                    </ul>
                </div>

            </div>

            <div className='p-5'>
                <span className='flex justify-end' onClick={handleTopOfPage}>
                    <FaAngleDoubleUp className='text-4xl p-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer' />
                </span>
            </div>

            <div className='text-gray-300 dark:text-gray-700'>
                <hr />
            </div>
        </div>
    )
}

export default CompanyInfo