import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex ">
      <div className="w-full">
        <div className="relative w-full h-full">
          <Slider {...settings}>
            <div>
              <Image
                src="/La Grave Tunnel.JPEG"
                alt="La Grave Tunnel"
                //loading="lazy"
                width={500}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
            <div>
              <Image
                src="/Mont Blanc.JPEG"
                alt="Mont Blanc"
                //loading="lazy"
                width={500}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
            <div>
              <Image
                src="/Touffes Lautaret.JPEG"
                alt="Touffes Lautaret"
                //loading="lazy"
                width={500}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
            <div>
              <Image
                src="/Virages neiges Brouillard NB.JPEG"
                alt="Virages neiges Brouillard NB"
                //loading="lazy"
                width={500}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
