//-- Importa
import React from "react";

// Images
import offerPic from "../../../public/assets/images/offer.svg";
import Image from "next/image";

export const Services = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="flex justify-between w-[95%]">
        <div className="">
          <Image
            src={offerPic}
            alt="Special Offer"
            className="size-[500px]"
          ></Image>
        </div>
        <div className="w-[700px]">
          <h4 className="text-[50px] font-bold">
            {" "}
            <span className="text-orange-400">Special</span> Offer
          </h4>
          <p className="my-5">
            Embark on a Shopping Journey that redefines your experience with{" "}
            <br />
            unbeatable deals. From premire selections to incredible savings, we
            offer unparralled value for your shopping
          </p>
          <p className="my-5">
            Navigate a realm of posibilities designed to fulfil your unique
            desires, <br />
            surpass the loftiestt expectations. Your Journey with us i snothing
            short of <br />
            exceptional
          </p>
          <div className=" flex justify-between w-[220px]">
            <buttons className="bg-orange-400 p-2 rounded-2xl text-white">
              Shop Now
            </buttons>
            <buttons className="border-slate-400 border-2 p-2 rounded-2xl">
              Learn More
            </buttons>
          </div>
        </div>
      </div>
    </section>
  );
};
