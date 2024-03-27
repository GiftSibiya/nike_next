"use client";
//-- Imports

// Components
import { CustomerRev } from "./components/CustomerRev";
import { Hero } from "./components/Hero";
import { PopularSec } from "./components/PopularSec";
import { SuperQual } from "./components/SuperQual";
import { Services } from "./components/Services";
import { Special } from "./components/Special";
import { Nav } from "./components/Nav";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/Footer";

//--

//-- Main
export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="p-8">
        <Hero />
      </section>
      <section className="p-8">
        <PopularSec />
      </section>
      <section className="p-8">
        <SuperQual />
      </section>
      <section className="p-8">
        <Services />
      </section>
      <section className="p-8">
        <Special />
      </section>
      <section className="bg-purple-300 p-8">
        <CustomerRev />
      </section>
      <section className="p-8">
        <Subscribe />
      </section>
      <section className="bg-black p-8">
        <Footer />
      </section>
    </main>
  );
}

//--
