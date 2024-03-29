import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-x-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
