import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderData = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  sliderData: SliderData[];
};

export const ImageSlider = ({ sliderData }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {sliderData?.map((slider: SliderData, index) => (
        <div key={index}>
          <div
            style={{
              backgroundImage: `url(${slider.image})`,
            }}
            className="!flex w-full h-[500px] flex-col items-center justify-center px-20 text-center bg-auto bg-center"
          >
            {/* <h1 className="text-6xl font-bold text-white">{slider.title}</h1>
            <p className="mt-3 text-2xl text-white">{slider.description}</p>
            <Link
              className="font-bold mt-4 text-2xl text-pink-400 uppercase backdrop-blur-md bg-white/30 p-2 rounded-md"
              href="/"
            >
              Our ArtDigitalSky!
            </Link> */}
          </div>
        </div>
      ))}
    </Slider>
  );
};
