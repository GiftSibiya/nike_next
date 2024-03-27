//-- Imports
import Image from "next/image";
import React from "react";

// Images
import shoeQual from "../../../public/assets/images/shoe8.svg";

// Components
import QualTile from "./utils/QualTile";

// Icons
import { FaTruck } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

//--

export const SuperQual = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-[90%] my-[50px]">
        <div className=" h-[400px] w-[550px]">
          <h3 className="text-[30px] font-bold">
            We Provide You{" "}
            <span className="text-orange-400">
              Super <br /> Quality
            </span>{" "}
            Shoes{" "}
          </h3>
          <p className="my-5 text-sm text-slate-500">
            Ensuring Premium comfort and style, our meticulously <br />
            handcrafted footware is designed to elevate your experience ,<br />
            providing you with unmathced quality, innovation and a touch of
            luxury.
          </p>
          <p className="my-5 text-sm text-slate-500">
            Our dedicaion to detail and excellence ensure your satisfaction
          </p>
          <button className="p-3 bg-orange-400 rounded-2xl text-white">
            View Details
          </button>
        </div>
        <div className=" h-[450px] w-[500px] ">
          <Image src={shoeQual} alt="Quality shoe" className=""></Image>
        </div>
      </div>
      <div className="flex justify-between h-[300px] w-[90%]  ">
        <QualTile
          icon={<FaTruck color="white" size={25} />}
          title="Free Shipping"
          descr=" Enjoy seamless shipping with our complimentary shipping service"
        />
        <QualTile
          icon={<GoShieldCheck color="white" size={25} />}
          title="Secure Payments"
          descr=" Enjoy seamless shipping with our complimentary shipping service"
        />
        <QualTile
          icon={<BiSupport color="white" size={25} />}
          title="Superior Support"
          descr=" Enjoy seamless shipping with our complimentary shipping service"
        />
      </div>
    </section>
  );
};
