import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      class="relative mb-8 md:flex md:justify-center md:pb-16"
    >
      <div class="relative z-20">
        <h2 class="relative text-2xl font-bold text-center my-16 md:text-left md:pl-12 md:text-3xl xl:pl-0 xl:text-center">
          Let's Get to Work Today
        </h2>

        <div class="px-12">
          <form
            name="contact"
            data-netlify="true"
            autocomplete="off"
            netlify-honeypot="bot-field"
            class="md:h-full md:flex md:items-end md:gap-x-6"
          >
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div class="md:flex md:gap-x-4">
              <div class="md:flex md:flex-col md:gap-y-4">
                <div class="border-2 py-3 px-2 mb-4 border-black md:mb-0 bg-white">
                  <input
                    class="bg-transparent placeholder-black"
                    type="text"
                    id="name"
                    name="name"
                    required
                    pattern="\S+.*"
                    placeholder="Name..."
                  />
                </div>
                <div class="border-2 py-3 px-2 mb-4 border-black md:mb-0 bg-white">
                  <input
                    class="bg-transparent placeholder-black"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email..."
                  />
                </div>
              </div>

              <div class="border-2 py-3 px-2 mb-8 border-black md:mb-0 bg-white">
                <textarea
                  class="h-full bg-transparent placeholder-black"
                  name="question"
                  placeholder="Your Question"
                  id="question"
                  cols="30"
                  minLength="10"
                  maxLength="100"
                  required
                ></textarea>
              </div>
            </div>

            <div class="relative md:flex md:flex-col md:items-center">
              <button
                type="submit"
                id="submit-button"
                class="inline-block uppercase font-medium px-6 py-2 bg-black text-white shadow-md"
              >
                Send
              </button>

              <span
                id="success"
                class="hidden absolute px-2 mx-1 py-2 font-medium border italic rounded-sm border-black bg-accent text-black top-0 md:px-4 md:mx-0 md:w-max md:-top-12 md:left-0"
              >
                We'll be in touch!
              </span>
              <span
                id="error"
                class="hidden absolute px-2 mx-1 py-2 font-medium border italic rounded-sm border-black bg-accent2Light text-black top-0 md:px-4 md:mx-0 md:w-max md:-top-12 md:left-0"
              >
                Whoops... Something went wrong.
              </span>

              <div class="opacity-75 mt-2 md:mt-0">
                <a href="#" class="p-2 pl-0 inline-block md:pb-0">
                  <svg
                    class="w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Email</title>
                    <path
                      d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
                      fill="black"
                    />
                  </svg>
                </a>

                <a href="#" class="p-2 inline-block md:pb-0">
                  <svg
                    class="w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path
                      d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                      fill="black"
                    />
                  </svg>{" "}
                </a>

                <a href="#" class="p-2 inline-block md:pb-0 md:pr-0">
                  <svg
                    class="w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path
                      d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <img
        class="absolute transform scale-200 top-20 z-10 md:scale-175 md:top-40 md:right-20 lg:top-112 xl:scale-75 xl:top-auto xl:bottom-auto"
        src="images/accent_bubble-contact.png"
        alt="Green decorative background"
      />

      <img
        class="absolute transform scale-200 top-40 left-60 z-0 md:scale-150 md:top-20 md:left-80 lg:top-32 lg:right-0 lg:left-auto xl:opacity-90 xl:top-48"
        src="images/accent_bubble-2-contact.png"
        alt="Red decorative background"
      />
      <div class="absolute ml-8 -top-60 bottom-0 w-1 border-l-2 border-accent z-10 md:hidden"></div>
    </section>
  );
};

export default ContactUs;
