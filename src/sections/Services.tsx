
  import logo1 from "../assets/logoipsum-264.svg";
  import logo2 from "../assets/logoipsum-330.svg";
  import logo3 from "../assets/logoipsum-342.svg";
  import logo4 from "../assets/logoipsum-343.svg";
  import logo5 from "../assets/logoipsum-375.svg";
  import FastMarquee from '../components/Marquee';
  import commersial from "../assets/commservice.webp"
  import residential from "../assets/resiservice.webp"
  import industrial from "../assets/industrial.webp"
import ServiceCard, { serviceProps } from '../components/ServiceCard';
import { faCity, faHouseChimneyWindow, faIndustry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Buttonlabel } from '../components/Button';
import { lazy, Suspense, useState } from "react";
// import FallbackCard from "../components/FallBackCard";
const FallbackCard = lazy(()=>import('../components/FallBackCard'))



  const logos: string[] = [logo1, logo2, logo3, logo4, logo5];

  const services: serviceProps[] = [
  {
    image: commersial,
    title: "Commercial Services",
    description: "Comprehensive wiring, lighting, and power system installations tailored for office buildings, retail spaces, and other commercial establishments.",
    child: <FontAwesomeIcon icon={faCity} />,
  },
  {
    image: residential,
    title: "Residential Services",
    description: "Reliable, safe, and energy-efficient electrical solutions designed to meet the unique needs of modern homes and improve daily living.",
    child: <FontAwesomeIcon icon={faHouseChimneyWindow} />,
  },
  {
    image: industrial,
    title: "Industrial Services",
    description: "Expert installation, maintenance, and support for heavy-duty electrical systems used in factories, warehouses, and other industrial facilities.",
    child: <FontAwesomeIcon icon={faIndustry} />,
  },
];

  function Services() {
    const [isfallback,setisfallback] = useState<boolean>(false)
    return (
      <div id="service" className="mt-32">
        <div className="flex flex-col items-center px-7 overflow-hidden">
          <h1 className="text-2xl font-medium text-center">
            Trusted Electrical Contractor for Industry Leaders
          </h1>
        <div className='flex justify-center items-center gap-4 border border-black/20 rounded-xl p-4 mt-8 xl:px-16 lg:py-6 xl:py-8 '>
          <div className=" flex gap-8 lg:gap-12 overflow-x-auto no-scrollbar  ">
            {logos.map((company, index) => (
              <img
                key={index}
                className="h-[4vh] md:h-[5vh]  shrink-0"
                src={company}
                alt={`Company logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
        <FastMarquee />

        <div className='w-full  flex flex-col items-center mt-12  lg:items-start lg:px-10 xl:px-32 '>
          <Buttonlabel title='OUR SERVICES' />

          <div className='lg:flex lg:justify-between'>
            <h1 className='mt-8 text-3xl text-center font-medium md:text-5xl md:font-semibold lg:text-start capitalize lg:leading-16 lg:whitespace-nowrap'>Elle 
               Power 
             <br/> Electrical <span className='text-ctmred'>Services</span></h1>
            <div className='flex flex-col items-center lg:items-end lg:pl-8 xl:pl-32'>
                <p className='text-center px-5 md:px-16 font-secondary text-black/60 mt-8 lg:text-right'>Our experienced electricians expertly handle commercial, residential, and industrial electrical projects, delivering fast, reliable, and professional solutions tailored to your specific needs.</p>
                <Button className='mt-8' title='BOOK A SERVICE' onClick={()=>setisfallback(true)}/>
            </div>
          </div>

          

          <div className='w-full flex flex-col items-center'>
           <div className='w-[90%] md:w-[70%] flex flex-col items-center mt-16  gap-4 lg:mt-20 lg:flex-row lg:w-full'>
             {services.map((serv)=>(
              <ServiceCard image={serv.image} title={serv.title} description={serv.description} child={serv.child} />

             
            ))}
           </div>
           
          </div>

        </div>
       <Suspense fallback={<h1>loading...</h1>}>
         {isfallback && <FallbackCard onclose={()=>setisfallback(false)}/>}
       </Suspense>
      </div>
    );
  }

  export default Services;
