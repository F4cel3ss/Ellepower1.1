import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faSquareArrowUpRight,
  faCity,
  faHouseChimneyWindow,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/newlogos.webp";
import { Link } from "react-scroll";

function Footer() {



    const handleLocationClick = (): void => {
    window.open('https://maps.app.goo.gl/DVm2Vafa3DbKTCBD9', '_blank');
  };
  return (
    <div className="w-full mt-32 lg:mt-12  flex justify-center bg-gray-100 py-16">
      <div className="w-[95%] lg:w-[80%] grid justify-items-center gap-8 lg:grid-cols-3">
        {/* Logo + Contact */}
        <div className="w-[90%]">
          <div className="flex items-center">
            <img
              className="w-[4rem]"
              src={logo}
              alt="ELLE POWER trading & services logo"
            />
            <h1 className="text-center font-bold text-xl leading-5 lg:text-gray-900 xl:text-2xl">
              ELLE POWER{" "}
              <span>
                <p className="text-[0.7rem] font-bold tracking-[1px] lg:text-[0.7rem] xl:text-[0.9rem]">
                  Trading & Services
                </p>
              </span>
            </h1>
          </div>
          <p className="mt-2 text-black/60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="w-full flex flex-col gap-4 mt-8 lg:gap-3">
            <div  className="flex gap-2 text-black/60">
              <span>
                <FontAwesomeIcon
                  className="text-ctmred text-xl"
                  icon={faLocationDot}
                />
              </span> 
              <p onClick={handleLocationClick} className="cursor-pointer hover:underline hover:text-ctmred">Tenogpahan Sison Surigao Del Norte</p>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="flex gap-2 text-black/60">
              <span>
                <FontAwesomeIcon
                  className="text-ctmred text-xl"
                  icon={faPhone}
                />
              </span>
             <a href="tel:09771742249" className="hover:underline hover:text-ctmred">
    09771742249
  </a>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="flex gap-2 text-black/60">
              <span>
                <FontAwesomeIcon
                  className="text-ctmred text-xl"
                  icon={faEnvelope}
                />
              </span>
            <a href="mailto:ellepower08@gmail.com" className="hover:underline hover:text-ctmred ">
    ellepower08@gmail.com
  </a>
            </div>
            <hr className="w-full text-gray-300" />
            <h1 className="text-xl text-black/60">License #22-00023077</h1>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-[90%]">
          <h1 className="text-2xl font-medium">Quick Links</h1>
          <div className="flex flex-col gap-2 lg:gap-4 mt-4">
           <Link to="home" smooth={true} duration={700}>
            <p className="flex gap-3 items-center text-black/60 text-lg cursor-pointer hover:text-ctmred">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faSquareArrowUpRight}
              />
              Home
            </p>
           </Link>
            <Link to="about" smooth={true} duration={700} offset={-50}>
            <p className="flex gap-3 items-center text-black/60  text-lg cursor-pointer hover:text-ctmred">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faSquareArrowUpRight}
              />
              About us
            </p></Link>
            <Link to="service" smooth={true} duration={700} offset={200}>
            <p className="flex gap-3 items-center text-black/60  text-lg cursor-pointer hover:text-ctmred">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faSquareArrowUpRight}
              />
              Services
            </p></Link>
            <Link to="product" smooth={true} duration={700} offset={-50}>
            <p className="flex gap-3 items-center text-black/60  text-lg cursor-pointer hover:text-ctmred">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faSquareArrowUpRight}
              />
              Product
            </p></Link>
          </div>
        </div>

        {/* Services + Socials */}
        <div className="w-[90%]">
          <h1 className="text-2xl font-medium">Our Services</h1>
          <div className="flex flex-col gap-2 lg:gap-4 mt-4">
            <p className="flex gap-3 items-center text-black/60  text-lg">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faCity}
              />
              Commercial Services
            </p>
            <p className="flex gap-3 items-center text-black/60  text-lg">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faHouseChimneyWindow}
              />
              Residential Services
            </p>
            <p className="flex gap-3 items-center text-black/60  text-lg">
              <FontAwesomeIcon
                className="text-ctmred"
                icon={faIndustry}
              />
              Industrial Services
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className=" text-4xl text-[#3b5998] hover:scale-105 transition"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className=" text-4xl text-[#0077b5]  hover:scale-105 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://wa.me/112067101079"
                aria-label="WhatsApp"
                className="text-4xl text-[#25D366] hover:scale-105 transition"
              >
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
