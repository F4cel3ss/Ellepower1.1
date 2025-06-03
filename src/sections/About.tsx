import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  Buttonlabel } from "../components/Button"
import {  faAward,  faPeopleGroup, faClockRotateLeft, faHexagonNodesBolt, faBolt } from "@fortawesome/free-solid-svg-icons"
import Image1 from "../assets/workwithus.jpg"
import Image2 from "../assets/team.webp"


function About() {
  return (

    <div id="about" className="w-full mt-8 grid grid-cols-1 place-items-center  ">
      <div className=" w-[95%] md:w-[80%]  grid lg:grid-cols-2 place-items-center gap-8 lg:gap-12">
       <div className="w-full grid place-items-center  gap-4 ">

         <div className="w-full h-[50vh] md:h-[35vh] lg:h-[45vh] xl:h-[60vh] relative ">
         <img className="absolute w-full h-full object-cover rounded-xl" src={Image2} />
           <span className="absolute bottom-0 mb-8 left-1/2 transform -translate-x-1/2 z-10 w-[90%]
           py-4 flex flex-col items-center gap-4 rounded-xl  sm:flex-row sm:justify-center bg-white">
                <h1 className="text-2xl font-medium text-center ">Elle Power Team</h1>
                 <span className=" bg-ctmred p-3 rounded-full"><FontAwesomeIcon className="text-xl text-white" icon={faPeopleGroup}/></span>
            </span>
        </div>

        <div className=" w-full  grid md:grid-cols-2 justify-items-center gap-4 md:gap-4">

         <div className="w-full h-[19vh] md:h-[21vh] lg:h-[30vh]  relative ">
            <img className="absolute w-full h-full object-cover object-top rounded-xl" src={Image1} />
            <span className="absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 z-10 w-[90%]
            p-2 flex flex-col items-center gap-2 rounded-xl sm:flex-row sm:justify-center  bg-white">
                    <h1 className="text-lg font-medium text-center ">Fast Service for Electrical</h1>
                    <span className=" bg-ctmred py-2 px-3 rounded-full"><FontAwesomeIcon className="text-xl text-white" icon={faBolt}/></span>
                </span>
        </div>

        

         <div className="w-full h-[19vh]  md:h-[21vh] lg:h-[30vh]   p-6 bg-gray-100 rounded-xl">
            <FontAwesomeIcon className="text-ctmred text-4xl" icon={faAward}/>
            <h1 className="text-xl font-medium mt-2">20+ Best Awards Wining</h1>
            <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
       </div>
        </div>
   </div>

      <div className="w-full md:w-[80%] lg:w-full  flex flex-col items-center lg:items-start px-4    ">
                <Buttonlabel title="ABOUT US"/>
                 <h1 className="mt-8 text-3xl text-center font-medium md:text-5xl md:font-semibold lg:text-start capitalize lg:leading-16">Your trusted electrical<br/> <span className="text-ctmred whitespace-nowrap">service         
                      partner</span> </h1>
              <p className="mt-8 text-center font-secondary text-black/60 lg:text-start">
  With years of hands-on experience, our team provides reliable and top-quality electrical services for residential, commercial, and industrial needs. From installations to emergency repairs, we are committed to powering your projects with expertise and integrity.
</p>

                  <hr className="w-[98%] border-t border-black/20 mt-4" />

                <div className="w-full flex flex-col md:flex-row md:gap-4 items-center mt-8 lg:mt-4">
                    <FontAwesomeIcon className="text-4xl text-ctmred" icon={faClockRotateLeft}/>
                        <div className=" mt-8">
                            <h1 className="text-xl text-center md:text-start font-medium text-black/80">Our Story</h1>
                           <p className="text-base text-center mt-4 md:mt-2 font-secondary md:text-start text-black/60">
  Elle Power started with a simple goal — to deliver dependable and efficient electrical solutions backed by a team that values precision, safety, and customer satisfaction. What began as a small operation has grown into a trusted name in the industry.
</p>

                        </div>

                </div>

                 <div className="w-full flex flex-col md:flex-row md:gap-4 items-center mt-8 lg:mt-4">
                    <FontAwesomeIcon className="text-4xl text-ctmred" icon={faHexagonNodesBolt}/>
                        <div className=" mt-8">
                            <h1 className="text-xl text-center md:text-start font-medium text-black/80">Our Mission</h1>
                            <p className="text-base text-center mt-4 md:mt-2 font-secondary md:text-start text-black/60">
  Our mission is to provide safe, efficient, and innovative electrical solutions that exceed client expectations. We aim to power homes and businesses with integrity, professionalism, and a strong commitment to quality service.
</p>

                        </div>

                </div>

         </div>
     </div>
      
        

        
  </div>

   
  )
}

export default About
