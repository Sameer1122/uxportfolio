import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-20 flex flex-col items-center justify-between px-4 pt-6 bg-white md:pt-4 lg:bg-gray-100 lg:shadow-inner">
      <div className="text-sm list-none w-full max-w-screen-xl md:flex md:flex-row md:justify-between md:items-center md:pb-8 gap-x-8 opacity-75 lg:gap-x-16">
        <div className="md:mt-2 mb-4 lg:mt-6 lg:mb-8">
          <a href="/">
            <svg
              className="w-24"
              width="83"
              height="29"
              viewBox="0 0 83 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>FTM Logo</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.3235 16.8328C29.1582 19.1573 29.0137 22.0352 27.0771 23.3267C25.0095 24.7056 22.1351 22.5016 19.7555 23.2137C17.7533 23.8129 16.9586 27.0745 14.8716 26.9794C12.8414 26.8869 12.0663 24.178 10.5749 22.7954C9.24317 21.561 7.70495 20.6661 6.54936 19.2648C5.04642 17.4423 3.09917 15.7305 2.81316 13.3833C2.51302 10.9201 3.36085 8.2717 4.98102 6.39379C6.57907 4.54153 9.21741 4.19227 11.4989 3.31587C13.7168 2.46388 13.4649 2.04997 15.661 2.9545C18.0017 3.91857 19.5183 6.88348 22.5528 7.12233C24.164 8.60452 26.6463 8.59899 28.0023 10.3186C29.3969 12.087 29.4834 14.584 29.3235 16.8328Z"
                fill="black"
                fill-opacity="0.42"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.1993 15.5102C27.034 17.8347 26.8895 20.7127 24.9529 22.0042C22.8853 23.3831 20.0109 21.179 17.6313 21.8911C15.6291 22.4903 14.8345 25.7519 12.7474 25.6568C10.7172 25.5643 9.94209 22.8554 8.45067 21.4729C7.11898 20.2384 5.58075 19.3436 4.42517 17.9422C2.92223 16.1197 2.15777 13.3114 1.87177 10.9642C1.57162 8.50096 2.805 7.67767 4.42517 5.79976C6.02321 3.94749 7.09322 2.86969 9.37468 1.99329C11.5926 1.14131 13.9364 1.08875 16.1326 1.99329C18.4733 2.95735 18.5646 4.08493 20.4286 5.79975C22.0398 7.28194 24.5221 7.27642 25.8781 8.99599C27.2727 10.7644 27.3592 13.2614 27.1993 15.5102Z"
                fill="pink"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-left max-w-max gap-y-2 md:gap-y-0 md:flex-row md:gap-x-12">
          <div className="inline-block relative">
            <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
              <a href="services.html" className="inline-block h-full w-full">
                Services
              </a>
            </li>
            <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
          </div>

          <div className="inline-block relative">
            <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
              <a
                href="index.html#testimonials"
                className="inline-block h-full w-full"
              >
                Testimonials
              </a>
            </li>
            <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
          </div>

          <div className="inline-block relative">
            <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
              <a
                href="index.html#experience"
                className="inline-block h-full w-full"
              >
                Experience
              </a>
            </li>
            <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
          </div>

          <div className="inline-block relative">
            <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
              <a href="contact.html" className="inline-block h-full w-full">
                Contact
              </a>
            </li>
            <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
          </div>
        </div>
        <div className="flex opacity-75 mt-2 mb-2 justify-end md:gap-x-2 md:mt-0 md:mb-0">
          <a href="#" className="p-2 pl-0 inline-block md:pb-0">
            <svg
              className="w-4"
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

          <a href="#" className="p-2 inline-block md:pb-0">
            <svg
              className="w-4"
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

          <a href="#" className="p-2 inline-block md:pb-0 md:pr-0">
            <svg
              className="w-4"
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
      <div className="flex flex-col items-center opacity-50 text-xs md:mb-2 lg:mb-6">
        <div className="flex gap-x-4 mb-2">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="font-medium mb-1">&copy FTM 2021</div>
      </div>
    </footer>
  );
};

export default Footer;
