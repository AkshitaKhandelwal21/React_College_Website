import React from 'react'

const News = (props) => {

  const news = [
    {
      "img": "https://static.wixstatic.com/media/ad420a_8c83230aa9064c4bbf68fd25ac821ace~mv2.jpg/v1/fill/w_740,h_726,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_8c83230aa9064c4bbf68fd25ac821ace~mv2.jpg",
      "title": "The Past Year in Research at The Thomas Hill Research Center"
    },
    {
      "img": "https://static.wixstatic.com/media/ad420a_751e2a146ba040089a5d5b92a95284bb~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_751e2a146ba040089a5d5b92a95284bb~mv2.jpg",
      "title": "The Annual Thomas Hill Research Center Symposium"
    },
    {
      "img": "https://static.wixstatic.com/media/ad420a_50fc9c2b49384f57b3d941b0e989fab6~mv2.jpg/v1/fill/w_740,h_647,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_50fc9c2b49384f57b3d941b0e989fab6~mv2.jpg",
      "title": "Open Positions for Research Assistants"
    }
  ]


  return (
    <div className='bg-gray-300'>
      <div className=''>
        {/* <hr /> */}
        <h1 className='text-2xl font-bold p-12 text-center'>News & Events</h1>
        {/* <hr /> */}
      </div>
      <div className='flex gap-6 justify-center'>
        {news.map(function (news, idx) {
          return <div key={idx} className='w-76 h-100'>
            <img src={news.img} alt="" className='w-76 h-60' />
            <h2 className='text-lg font-semibold bg-white h-30 items-center pt-4 pl-4'><a href="">{news.title}</a></h2>
          </div>
        })}
      </div>

    </div>
  )
}

export default News