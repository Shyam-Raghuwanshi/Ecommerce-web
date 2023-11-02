import React from "react";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CtaSection from "./CtaSection";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}
