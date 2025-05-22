import Footer1 from "./components/Footer1"
import Footer2 from "./components/Footer2"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import News from "./components/News"
import Publication from "./components/Publication"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {

  const publicationData = [
    {
      "heading": "Heading 1",
      "desc": "lorem ipsum doler amet 1."
    },
    {
      "heading": "Heading 2",
      "desc": "lorem ipsum doler amet 2."
    },
    {
      "heading": "Heading 3",
      "desc": "lorem ipsum doler amet 3."
    },
    {
      "heading": "Heading 4",
      "desc": "lorem ipsum doler amet 4."
    },
    {
      "heading": "Heading 5",
      "desc": "lorem ipsum doler amet 5."
    }
  ]

  return (
    <>
      <Navbar />
      <Intro />
      <News />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{publicationData.map(function (elem, idx) {
          return <Publication key={idx} heading={elem.heading} desc={elem.desc} />
        })}</SwiperSlide>
        
      </Swiper>
      <Footer1 />
      <Footer2 />
    </>

  )
}

export default App
