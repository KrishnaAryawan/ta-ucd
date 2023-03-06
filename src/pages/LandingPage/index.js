import React, { useEffect } from "react";
import Hero from "../../components/LandingPage/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/LandingPage/Products";
import ScrollToTop from "../../components/LandingPage/ScrollToTop";
import Services from "../../components/LandingPage/Services";
import Testimonials from "../../components/LandingPage/Testimonials";
import scrollreveal from "scrollreveal";

export default function LandingPage() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #products,
        #testimonials,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}
