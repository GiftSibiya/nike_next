//-- Imports
import React from "react";

// Images
import customer1 from "../../../public/assets/images/customer1.jpeg";
import customer2 from "../../../public/assets/images/customer2.svg";

// Components
import CustomerTile from "./utils/CustomerTile";

//--

export const CustomerRev = () => {
  return (
    <section className="flex justify-center p-8">
      <div className=" w-[80%]">
        <div className="my-10">
          <h3 className="text-[40px] text-center font-bold">
            What our <span className="text-orange-400">Customers</span> Say{" "}
          </h3>
          <p className="text-center text-slate-700">
            Hear geniuine stories from our satisfied customers about <br />{" "}
            their exceptional experiences with us{" "}
          </p>
        </div>

        <div className="flex justify-between">
          <CustomerTile
            pfp={customer1}
            testimony="The attention to detail and the quality of the product really exceeded my expectations. Hight Reccommended!"
            star="4.5"
            name="Morich Brown"
          />
          <CustomerTile
            pfp={customer2}
            testimony="The Product not only meet but exceeded my expectations. i'll definetley be a returing customer"
            star="4.5"
            name="Morich Brown"
          />
        </div>
      </div>
    </section>
  );
};
