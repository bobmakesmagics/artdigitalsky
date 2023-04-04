import React from 'react';
import type { NextPage } from 'next';
import LayoutBase from '@/components/Layout/base';
import { ImageSlider } from '@/components/Widgets/ImageSlider';
import { sliderData } from '@/utils/data';
import { MainBanner } from '@/components/Layout/MainBanner';
import { AboutUs } from '@/components/Layout/AboutUs';

const Home: NextPage = () => {
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
    <LayoutBase>
      {(state) => (
        <div className="min-h-screen">
          <MainBanner />
          <AboutUs />
          <ImageSlider sliderData={sliderData} />
        </div>
      )}
    </LayoutBase>
  );
};

export default Home;
