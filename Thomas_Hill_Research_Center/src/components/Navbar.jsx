import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-300'>

            <div className='py-6 px-12 flex justify-between items-center'>
                <h1 className='text-2xl font-semibold flex flex-col'>
                    <span>The Thomas Hill</span>
                    <span>Research Center</span></h1>

                <div className='flex items-center gap-12'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Research</a>
                    <a href="">Publications</a>
                    <a href="">News</a>
                    <a href="">Contact</a>
                </div>
            </div>
            <div className='px-12'>
                <hr />
            </div>


        </div>
    )
}

export default Navbar