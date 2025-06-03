import { useState,useEffect } from "react"
import image1 from "../assets/special1.webp"
import image2 from "../assets/special2.webp"
import image3 from "../assets/special3.webp"
import image4 from "../assets/special4.webp"
import image5 from "../assets/special5.webp"
import image6 from "../assets/special6 (1).webp"
import image7 from "../assets/special7.webp"





function Specialty() {

   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  type specialtytype = {
    img : string,
    text: string
  }

  const specialty : specialtytype [] = [
    {img : image1, text :"REMANUFACTURING OF DISTRIBUTION TRANSFORMERS"},
    {img : image2, text :"REWINDING OF POWER TRANSFORMER"},
    {img : image3, text :"REWINDING OF DISTRIBUTION TRANSFORMER"},
    {img : image4, text :"REWINDING OF AUTOMATIC RECLOSER"},
    {img : image5, text :"CONSTRUCTION & DESIGN"},
    {img : image6, text :"DISTRIBUTION & DESIGN"},
    {img : image7, text :"SUBSTATION"},
  ]
  return (
    <div className="w-full flex flex-col items-center    mt-16">
      <h1 className="text-3xl">Elle Power Specialty</h1>
      
      <div className="w-full mt-8 flex justify-center ">

        {isLargeScreen?   <div className="hidden w-[95%] lg:grid grid-cols-3 grid-rows-2 h-[120vh] ">

          <div className="w-full h-full p-2  " >
            <div className="w-full h-full  shadow-xl  rounded-xl overflow-hidden">
          <div className="w-full h-full relative">
            <img loading="lazy" className="w-full h-full object-cover " src={image2} />
            <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
             <span className="text-ctmred">REWINDING OF</span> <br/>POWER TRANSFORMER </span>
          </div>
        </div>
          </div>

            <div className="w-full row-span-2  flex flex-col p-2 gap-4" >
               <div className="w-full h-[35%] shadow-xl  rounded-xl overflow-hidden">
          <div className="w-full h-full relative">
            <img loading="lazy" className="w-full h-full object-cover " src={image7} />
            <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
             SUBSTATION </span>
          </div>
        </div>

         <div className="w-full h-[65%] shadow-card rounded-xl overflow-hidden">
          <div className="w-full h-full relative">
            <img loading="lazy" className="w-full h-full object-cover " src={image1} />
            <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
             <span className="text-ctmred">REMANUFACTURING OF</span><br/>  DISTRIBUTION TRANSFORMERS </span>
          </div>
        </div>
            </div>

              <div className="w-full   p-2" >
                 <div className="w-full h-full shadow-xl  rounded-xl overflow-hidden">
          <div className="w-full h-full relative">
            <img loading="lazy" className="w-full h-full object-cover " src={image5} />
            <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
            CONSTRUCTION &<span className="text-ctmred"> DESIGN</span> </span>
          </div>
        </div>
              </div>

                <div className="w-full h-full  overflow-hidden p-2 flex flex-col gap-4" >
                  <div className="w-full h-[50%] shadow-xl rounded-xl overflow-hidden">
                <div className="w-full h-full relative">
                  <img loading="lazy" className="w-full h-full object-cover " src={image3} />
                  <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
                 <span className="text-ctmred"> REWINDING OF</span> <br/> POWER TRANSFORMER </span>
                </div>
            </div>

              <div className="w-full h-[50%] shadow-xl  rounded-xl overflow-hidden">
                <div className="w-full h-full relative">
                  <img loading="lazy" className="w-full h-full object-cover " src={image4} /> 
                  <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
                  <span className="text-ctmred ">REWINDING OF</span> <br/> AUTOMATIC RECLOSER </span>
                </div>
            </div>
                </div>

                  <div className="w-full  p-2" >
                     <div className="w-full h-full shadow-xl rounded-xl overflow-hidden">
          <div className="w-full h-full relative">
            <img loading="lazy" className="w-full h-full object-cover " src={image6} />
            <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center font-medium bg-white rounded-xl "> 
             DISTRIBUTION &<span className="text-ctmred"> DESIGN</span></span>
          </div>
        </div>
                  </div>
       </div> : <div className="lg:hidden w-[95%] md:w-[70%] lg:w-[90%] grid grid-cols-1 gap-4 ">
      
      {specialty.map((special)=>(
        <div className="w-full h-[40vh] bg-black  rounded-xl overflow-hidden">
          <div className="w-full h-full relative">
            <img loading="lazy" className="w-full h-full object-cover " src={special.img} />
            <span className="w-[90%] absolute bottom-0 mb-4 left-1/2 transform -translate-1/2 py-2 px-4 text-center bg-white rounded-xl ">{special.text}</span>
          </div>
        </div>
      ))}
         

       </div>
        }
       
      

      </div>

      <div className="w-full h-[30vh] hidden lg:grid grid-cols-7 mt-16">
          {specialty.map((image)=>(
            <img loading="lazy" className="w-full h-full object-cover " src={image.img} />
          ))}
      </div>
    </div>
  )
}

export default Specialty
