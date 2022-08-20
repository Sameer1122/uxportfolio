import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-2 md:px-8 lg:px-0 lg:relative lg:flex lg:justify-center xl:max-w-screen-2xl xl:mx-auto">
      <div className="lg:px-16">
        <div className="w-full pt-12 flex items-center md:gap-x-16 md:pt-24">
          <h1 className="w-full pl-4 xs:text-xl text-2xl z-10 font-bold -mt-40 md:text-5xl lg:-mt-60 lg:text-6xl">
            Come Say Hello!
          </h1>

          <div className="relative bottom-0 w-60 md:w-96 md:-mb-2 lg:-mb-8 pb-[50%] z-10 lg:w-[28rem]">
            <img
              className="absolute bottom-0 w-full h-full object-contain"
              src="images/contact_landing_hero.png"
              alt=""
            />
          </div>

          <img
            className="absolute z-0 left-20 top-20 md:right-40 lg:right-auto lg:left-80 xl:left-auto xl:right-40"
            src="images/contact_landing_bubble.png"
            alt="Green decorative bubble"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
