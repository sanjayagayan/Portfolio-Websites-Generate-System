import {React, useState, useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image_1 from './slide1.jpg'
import Image_2 from './slide2.jpg'
import Image_3 from './slide3.jpg'
import Image_4 from './slide4.jpg'
import Image_5 from './slide5.jpg'

export const Portfolio = ({ initialSlide = 0 }) =>{

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    focusOnSelect: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   const items = [
    {
        id: 1,
        title: "A",
        desc: "asgdaskdasg asdsdasdusd akusaydaskudas dsadusyfdausyd asgaduasygdsaud",
        image: Image_1,
        alt:"Slide 1 Image"
    },
    {
        id: 2,
        title: "B",
        desc: "asgdaskdasg asdsdasdusd akusaydaskudas dsadusyfdausyd asgaduasygdsaud",
        image: Image_2,
        alt:"Slide 2 Image"
    },
    {
        id: 3,
        title: "C",
        desc: "asgdaskdasg asdsdasdusd akusaydaskudas dsadusyfdausyd asgaduasygdsaud",
        image: Image_3,
        alt:"Slide 3 Image"
    },
    {
        id: 4,
        title: "D",
        desc: "asgdaskdasg asdsdasdusd akusaydaskudas dsadusyfdausyd asgaduasygdsaud",
        image: Image_4,
        alt:"Slide 4 Image"
    },
    {
        id: 5,
        title: "D",
        desc: "asgdaskdasg asdsdasdusd akusaydaskudas dsadusyfdausyd asgaduasygdsaud",
        image: Image_5,
        alt:"Slide 5 Image"
    },

   ]
  return (
    <div className='px-40 grid grid-cols-1 grid-row-2'>
          <div >
            <p className='text-white font-[Poppins] text-3xl font-extrabold'>Portfolio</p>
            <p className='text-lightblue font-[Poppins] text-2xl font-normal'>Latest Works </p>
          </div>
          <div>
                <Slider {...settings} className='gap-10 pb-10'>
                    {items.map(({id,title,image,alt})  => (
                      <div key={id} className='' >
                          <div className="shadow-md w-[300px] h-[370px] px-5 py-5">
                              <img class="rounded-t-lg w-[300px] h-[250px]" src={image} alt={alt} /> 
                              <div className="text-center pb-10">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray ">{title}</h5>
                                      <div className='space-x-5'>
                                            <button className='bg-gradient-to-t from-black to-bluecustom hover:from-bluecustom hover:to-black ...  py-2 px-8 rounded-[17px] text-white font-normal 
                            duration-500'>Github</button>
                                            <button className='bg-gradient-to-t from-pinkcustom to-bluecustom hover:from-bluecustom hover:to-pinkcustom ...  py-2 px-8 rounded-[17px] text-white font-normal 
                            duration-500'>Demo</button>
                                      </div>    
                              </div>
                          </div>
                      </div>
                    ))}
                </Slider>
          </div>
  </div>
  )
}

