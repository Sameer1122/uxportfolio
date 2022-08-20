import React from "react";

const Services = () => {
  return (
    <section className="px-1 md:px-2 lg:px-4">
      <div className="lg:grid lg:grid-cols-2 mb-1 md:mb-2 lg:mb-4">
        <div className="relative w-full pb-1/1 overflow-hidden xl:pb-2/3">
          <img
            className="absolute right-0 bottom-0 w-full h-full object-cover"
            src="images/service_1.png"
            alt="Working people"
          />
          <div className="absolute pl-4 pt-2 lg:pl-6 lg:pt-4">
            <span className="w-full relative z-20 text-6xl font-bold text-stroke_thick text-transparent opacity-40 xl:text-7xl">
              1
            </span>
            <img
              className="absolute top-0 right-0 transform scale-250 z-10"
              src="images/service_bubble.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-accentLight px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24">
          <div>
            <h2 className="text-2xl font-bold mb-6 lg:text-4xl lg:mb-12">
              Service #1
            </h2>

            <p className="mb-6 md:text-lg lg:text-xl lg:mb-12">
              A descriptive but still short and sweet explainer on the service.
              Remember, it’s important not to overload the visitor with
              information.
            </p>
            <div className="relative z-20 mb-10 lg:mb-12">
              <div className="text-base -mt-2 max-w-prose md:text-lg lg:text-xl">
                What{" "}
                <div className="relative inline-block z-20">
                  <div className="relative z-10"> piques</div>
                  <div className="absolute bottom-1 bg-accent2Light opacity-75 h-3 w-full transform -rotate-3"></div>
                </div>{" "}
                their interest
              </div>
            </div>

            <p className="text-sm md:text-base leading-normal lg:leading-relaxed">
              However you should provide some more information should they have
              immediate questions that come to mind. Know what I mean? For
              example, what’s easier - having an immediate question answered
              thanks to a good description here and then being able to make a
              decision or first filling out a contact form and waiting for an
              answer to what could be a simple question.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 mb-1 md:mb-2 lg:mb-4">
        <div className="relative w-full pb-1/1 overflow-hidden lg:order-2  xl:pb-2/3 =">
          <img
            className="absolute right-0 bottom-0 w-full h-full object-cover"
            src="images/service_2.png"
            alt="Working people"
          />
          <div className="absolute pr-4 pt-2 lg:pr-6 lg:pt-4 right-0">
            <span className="w-full relative z-20 text-6xl font-bold text-stroke_thick text-transparent opacity-40 xl:text-7xl">
              2
            </span>
            <img
              className="absolute top-0 right-0 transform scale-250 z-10"
              src="images/service_bubble.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-accentLight px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24">
          <div>
            <h2 className="text-2xl font-bold mb-6 lg:text-4xl lg:mb-12">
              Service #2
            </h2>

            <div
              className="text-base -mt-2 max-w-prose md:text-lg lg:text-xl mb-6
                        lg:mb-12"
            >
              A descriptive but still short and{" "}
              <div className="relative inline-block z-20">
                <div className="relative z-10"> sweet explainer</div>
                <div className="absolute bottom-1 bg-accent2Light opacity-75 h-3 w-full transform -rotate-3"></div>
              </div>{" "}
              on the service. Remember, it’s important not to overload the
              visitor with information.
            </div>
            <div className="relative z-20 mb-10 lg:mb-12">
              <div className="text-base -mt-2 md:text-lg lg:text-xl">
                What piques their interest.
              </div>
            </div>

            <p className="text-sm md:text-base leading-normal lg:leading-relaxed">
              However you should provide some more information should they have
              immediate questions that come to mind. Know what I mean? For
              example, what’s easier - having an immediate question answered
              thanks to a good description here and then being able to make a
              decision or first filling out a contact form and waiting for an
              answer to what could be a simple question.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="relative w-full pb-1/1 overflow-hidden xl:pb-2/3">
          <img
            className="absolute right-0 bottom-0 w-full h-full object-cover"
            src="images/service_3.png"
            alt="Working people"
          />
          <div className="absolute pl-4 pt-2 lg:pl-6 lg:pt-4">
            <span className="w-full relative z-20 text-6xl font-bold text-stroke_thick text-transparent opacity-40 xl:text-7xl">
              3
            </span>
            <img
              className="absolute top-0 right-0 transform scale-250 z-10"
              src="images/service_bubble.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-accentLight px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24">
          <div>
            <h2 className="text-2xl font-bold mb-6 lg:text-4xl lg:mb-8">
              Service #3
            </h2>

            <div
              className="text-base -mt-2 max-w-prose md:text-lg lg:text-xl mb-6
                                            lg:mb-12"
            >
              A descriptive but still short and sweet explainer on the{" "}
              <div className="relative inline-block z-20">
                <div className="relative z-10"> service.</div>
                <div className="absolute bottom-1 bg-accent2Light opacity-75 h-3 w-full transform -rotate-3"></div>
              </div>{" "}
              Remember, it’s important not to overload the visitor with
              information.
            </div>
            <div className="relative z-20 mb-10 lg:mb-12">
              <div className="text-base -mt-2 md:text-lg lg:text-xl">
                What piques their interest.
              </div>
            </div>

            <p className="text-sm md:text-base leading-normal lg:leading-relaxed">
              However you should provide some more information should they have
              immediate questions that come to mind. Know what I mean? For
              example, what’s easier - having an immediate question answered
              thanks to a good description here and then being able to make a
              decision or first filling out a contact form and waiting for an
              answer to what could be a simple question.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
