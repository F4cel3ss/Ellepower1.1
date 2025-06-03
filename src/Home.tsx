import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Services from "./sections/Services";
import Specialty from "./sections/Specialty";
import Testimonials from "./sections/Testimonials";
// import Marquee from "./components/Marquee";

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Sections */}
      <Hero />
      <About />
      {/* <Marquee /> */}
      <Services />
      <Specialty />
      <Product />
      <Testimonials />
      <ContactUs />
      <Footer />

      {/* Copyright */}
      <div className="w-full flex bg-ctmred text-ctmaccent py-4 px-12 text-center justify-center font-secondary font-medium">
        © 2025 Elle Power Trading and Services. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Link to="home" smooth={true} duration={700}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="fixed right-4 bottom-16 z-50 bg-ctmred text-white p-3 rounded-full shadow-md hover:bg-red-700 transition-opacity duration-300 cursor-pointer"
          />
        </Link>
      )}
    </div>
  );
}

export default Home;
