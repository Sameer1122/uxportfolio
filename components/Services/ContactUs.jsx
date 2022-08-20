import React from "react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="relative w-full text-center my-4 md:my-8 lg:my-10 xl:my-24">
      <span className="relative px-2 bg-white z-10 uppercase font-medium hover:text-accent2 ">
        <Link href="/contact">Get in touch today</Link>
      </span>
      <div className="absolute h-1 w-full bg-accent top-3 z-0"></div>
    </div>
  );
};

export default ContactUs;
