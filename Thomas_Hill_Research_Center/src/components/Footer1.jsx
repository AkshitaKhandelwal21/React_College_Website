import React from 'react'
import Line from './Line'

const Footer1 = () => {
    return (
        <div className='bg-gray-300'>
            <div className='flex justify-center'>
                <div className='items-center w-84'>
                    <h2 className='font-semibold text-center text-xl'>
                        Join our mailing list for updates on publications and events
                    </h2>
                </div>
            </div>
            <div className='flex justify-center'>
                <form action="" className='flex flex-col'>
                    <div className='flex flex-col justify-start p-2 mt-12'>
                        <label>Enter your email here*</label>
                        <input type="email" name="" id="" required className='w-180 h-12 border px-2' />
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <input type="checkbox" name="" id="" className='mt-2' />
                            <label className='mt-2 ml-2'>Yes, subscribe me for your newsletter</label>
                        </div>
                        <div className='p-2'>
                            <button type="submit" className='border px-20 py-2'>Join</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex justify-center'>
                <div className='w-200 p-12'>
                    <ul className='flex justify-between'>
                        <li>500 Terry Francine Street San Francisco, CA 94158</li>
                        <li className='font-semibold'>|</li>
                        <li>info@mysite.com</li>
                        <li className='font-semibold'>|</li>
                        <li>123-456-7890</li>
                    </ul>
                </div>
            </div>
            <Line />
        </div>
    )
}

export default Footer1 