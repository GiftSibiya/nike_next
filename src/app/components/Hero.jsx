"use-client";
//-- Imports
import Image from "next/image";
import React, { useState } from "react";

// Images
import { bigShoe1 } from "../../../public/assets/images";
import { bigShoe2 } from "../../../public/assets/images";
import { bigShoe3 } from "../../../public/assets/images";

// Components
import ShoeTile from "./utils/ShoeTile";

export const Hero = () => {
  //-- Hooks
  const [heroShoe, setHeroShoe] = useState(bigShoe1);

  return (
    <section id="Home" className="flex mt-[70px]">
      <div className="flex flex-col">
        <h2 className="text-orange-400"> Our Summer Collection </h2>
        <div className="">
          <h1 className="text-[80px] w-[700px]">
            The New Arrival <br />{" "}
            <span className="text-orange-400"> Nike </span> Shoes
          </h1>
          <p className="border-orange-400 border-2 p-5 w-[420px] rounded-3xl mb-4">
            Disocver stylish Nike arrivals, qulaity <br /> comfort and inovation
            for your avitve life
          </p>
          <button className="p-3 bg-orange-400 rounded-2xl text-white">
            {" "}
            Shop Now
          </button>
          <div className="flex justify-between w-[50%]">
            <div className=" flex flex-col">
              <p className="font-bold text-[30px]">1K+</p>
              <p>Brands</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[30px]">500+</p>
              <p>Shops</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[30px]">250+</p>
              <p>Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Image
          src={heroShoe}
          alt="hero shoe"
          className="relative top-[-50px] w-[500px] "
        />
        <div className="flex">
          <ShoeTile img={bigShoe1} onClick={() => setHeroShoe(bigShoe1)} />
          <ShoeTile img={bigShoe2} onClick={() => setHeroShoe(bigShoe2)} />
          <ShoeTile img={bigShoe3} onClick={() => setHeroShoe(bigShoe3)} />
        </div>
      </div>
    </section>
  );
};
