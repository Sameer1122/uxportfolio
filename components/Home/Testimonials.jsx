import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" class="relative lg:mb-16 xl:mb-0">
      <div class="relative z-20">
        <h2 class="pt-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl lg:py-16">
          What the{" "}
          <div class="relative inline-block z-20">
            <div class="relative z-10">Experts</div>
            <div class="absolute bottom-2 bg-accent h-3 w-full transform -rotate-3"></div>
          </div>{" "}
          are saying
        </h2>
        <div class="lg:flex lg:justify-center">
          <div class="py-24 relative z-20 md:px-20 md:pt-16 lg:flex lg:flex-wrap lg:max-w-screen lg:pt-8 lg:justify-center lg:gap-12">
            <div class="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
              <p class="text-sm col-start-1 col-end-6 z-10 italic md:hidden lg:text-lg">
                “Lorem ipsum dolor sit amet, consem tetur adipiscing elit.“
              </p>

              <p class="text-sm col-start-1 col-end-6 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                "Lorem ipsum dolor sit amet, consem tetur adipiscing elit. Neque
                egestas enim, porttitor sed a diam. Posuere ante faucibus tellus
                sed."
              </p>

              <div class="relative col-start-6 col-end-9 overflow-visible">
                <img
                  class="absolute bottom-0 right-0 -mb-8 md:h-56"
                  src="images/testim_1.png"
                  alt="Portait of a grey shirted man"
                />
              </div>

              <div class="absolute w-full h-full overflow-hidden">
                <img
                  class="relative w-32 top-5 -left-10"
                  src="images/accent_bubble-4.svg"
                  alt="Green decorative corner bubble"
                />
              </div>
            </div>

            <div class="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
              <p class="text-sm col-start-4 col-end-10 z-10 italic md:hidden lg:text-lg">
                “Lorem ipsum dolor sit amet, consem tetur adipiscing elit.“
              </p>

              <p class="text-sm col-start-4 col-end-10 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                "Lorem ipsum dolor sit amet, consem tetur adipiscing elit. Neque
                egestas enim, porttitor sed a diam. Posuere ante faucibus tellus
                sed."
              </p>

              <div class="relative col-start-1 col-end-4 overflow-visible">
                <img
                  class="absolute bottom-0 right-0 -mb-8 md:h-64 md:left-0 xl:w-72"
                  src="images/testim_2.png"
                  alt="Portait of a grey shirted man"
                />
              </div>

              <div class="absolute w-full h-full overflow-hidden">
                <img
                  class="absolute inline-block -top-20 -right-10 w-32"
                  src="images/accent_bubble-4.svg"
                  alt="Green decorative corner bubble"
                />
              </div>
            </div>

            <div class="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
              <p class="text-sm col-start-1 col-end-6 z-10 italic md:hidden lg:text-lg">
                “Lorem ipsum dolor sit amet, consem tetur adipiscing elit.“
              </p>

              <p class="text-sm col-start-1 col-end-6 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                "Lorem ipsum dolor sit amet, consem tetur adipiscing elit. Neque
                egestas enim, porttitor sed a diam. Posuere ante faucibus tellus
                sed."
              </p>

              <div class="relative col-start-6 col-end-9 overflow-visible">
                <img
                  class="absolute bottom-0 right-0 -mb-8 md:h-60"
                  src="images/testim_3.png"
                  alt="Portait of a woman."
                />
              </div>

              <div class="absolute w-full h-full overflow-hidden">
                <img
                  class="relative w-32 -top-10 -left-10 transform rotate-270"
                  src="images/accent_bubble-4.svg"
                  alt="Green decorative corner bubble"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute ml-8 top-0 bottom-0 w-1 border-l-2 border-accent z-10 lg:hidden"></div>
    </section>
  );
};

export default Testimonials;
