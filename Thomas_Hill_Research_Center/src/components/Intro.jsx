import React from 'react'

const Intro = () => {
    return (
        <div className='bg-gray-300'>
            <h1 className='py-8 font-bold text-4xl text-center'>
                The Thomas Hill Research Center
            </h1>
            <div className='flex items-center justify-center'>
                <p className='text-center w-120 '>
                    I'm a paragraph. Click here to add your own text and edit me.
                    It’s easy. Just click “Edit Text” or double click me
                    to add your own content and make changes to the font.</p>
            </div>

            <div className=''>
                <div className='py-8 flex items-center justify-center relative'>
                    <img src="https://static.wixstatic.com/media/ad420a_4cf9239236b44010bbc49aa79987fb12~mv2.jpg/v1/fill/w_1191,h_534,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_4cf9239236b44010bbc49aa79987fb12~mv2.jpg"
                        alt="" className='h-130 w-280' />
                </div>
                <div className='bg-white w-2/3 mx-auto -mt-52 relative'>
                    <h3 className='font-semibold text-2xl text-center pt-10'>Research</h3>
                    <div className=''>
                        <p className='px-32 py-4 text-center'>I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me
                            to add your own content and make changes to the font.
                            Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell
                            a story and let your users know a little more about you.
                        </p>

                        <p className='px-32 py-4 text-center'>
                            This is a great space to write a long text about your company and your services.
                            You can use this space to go into a little more detail about your company.
                            Talk about your team and what services you provide. Tell your visitors the story
                            of how you came up with the idea for your business and what makes you different from your competitors.
                            Make your company stand out and show your visitors who you are.
                        </p>
                    </div>
                    <div className='flex justify-center p-12'>
                        <button className='bg-blue-700 text-white px-4 py-2'>Read More</button>
                    </div>                
                    </div>
            </div>
            <br />
        </div>
    )
}

export default Intro