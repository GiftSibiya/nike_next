import React from "react";

import footerLogo from "../../../public/assets/images/footer-logo.svg";
import Image from "next/image";

// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <div className=" flex w-[80%] justify-between mb-[50px]">
        <div className="text-white">
          <Image src={footerLogo} alt="" className="w-[100px] mb-5"></Image>
          <p className="text-xs">
            Get Shoes ready for the new term at your
            <br />
            nearest Noke store. Find your perfect size in <br />
            store. Get rewards.
          </p>
          <div className="flex w-[120px] justify-between mt-5 ">
            <FaFacebookF
              color="black"
              size={30}
              className="bg-white p-2 rounded-full"
            />
            <FaXTwitter
              color="black"
              size={30}
              className="bg-white p-2 rounded-full"
            />
            <IoLogoInstagram
              color="black"
              size={30}
              className="bg-white p-2 rounded-full"
            />
          </div>
        </div>
        <div className="">
          <h5 className="text-white mb-5">Products</h5>
          <ul className="text-white mb-5 text-sm  ">
            <li className="mb-2">Air Force</li>
            <li className="mb-2">Air Jordans</li>
            <li className="mb-2">Nike Runners</li>
            <li className="mb-2">Nike Newbalance</li>
            <li className="mb-2">Nike Cortez</li>
            <li className="mb-2">Nike Waffle Racer</li>
          </ul>
        </div>
        <div className="text-white mb-5">
          <h5 className="text-white mb-5">Help</h5>
          <ul className="text-white mb-5 text-sm  ">
            <li className="mb-2">About Us</li>
            <li className="mb-2">FAQs</li>
            <li className="mb-2">How It Works</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Payment Options</li>
          </ul>
        </div>
        <div className="text-white mb-5">
          {" "}
          <h5 className="text-white mb-5">Get in touch</h5>
          <ul className="text-white mb-5 text-sm  ">
            <li className="mb-2">Customer@nike.com</li>
            <li className="mb-2">+92554862354</li>
          </ul>
        </div>
      </div>
      <div className="flex w-[80%] justify-between">
        <p className="text-white text-sm">
          © Copyright. All Rights Reserved 2024.
        </p>
        <p className="text-white text-sm">Terms & Conditions</p>
      </div>
    </section>
  );
};
