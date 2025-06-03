import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../assets/newlogos.webp"
import { lazy, Suspense, useEffect, useRef, useState } from "react"
import {Button} from "./Button"
// import FallbackCard from "./FallBackCard"
import { Link } from "react-scroll"
const FallbackCard = lazy(()=> import('./FallBackCard'))

type navtype = {
  text : string,
  link : string,
  offset : number
}
function Header() {
    const [isOpen,setisOpen] = useState<boolean>(false)
    const [isfallback,setisfallback] = useState<boolean>(false)
    
    const nav: navtype [] = [
       {text : 'About us', link: 'about', offset:-10},
      {text : 'Services', link : 'service' , offset:230},
      {text: 'Product', link: 'product', offset:-50},
      {text:'Contact us', link:'contact', offset:10}]
    const drawerRef = useRef<HTMLDivElement>(null)
    const handledrawer = ():void=>{
        setisOpen(!isOpen)
    }
    useEffect(()=>{
      const handleClickOutside = (e:MouseEvent)=>{
        if(drawerRef.current && !drawerRef.current.contains(e.target as Node)){
          setisOpen(false)
        }
        

      }
      if(isOpen){
        document.addEventListener('mousedown', handleClickOutside)
      }else{
        document.removeEventListener('mousedown', handleClickOutside)
      }
      return ()=> {
        document.removeEventListener('mousedown', handleClickOutside)}
    },[isOpen])
    useEffect(()=>{
      if(isOpen){
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "auto"

      }
    },[isOpen])
   
  return (
    <div id="home" className=' relative w-full h-[9vh] flex justify-between items-center 
    bg-ctmred pl-2 pr-6 lg:h-[11vh] lg:bg-white xl:px-16 z-50'>

        <div className="h-full flex items-center ">
            <img className="h-[90%]" src={Logo} alt="ELLE POWER trading & services logo" />
            <h1 className=" text-white text-center font-bold text-xl leading-5 lg:text-gray-900 xl:text-2xl ">ELLE POWER <span>
                 <p className="text-[0.7rem] font-bold tracking-[1px] lg:text-[0.7rem] xl:text-[0.9rem] ">Trading & Services</p>
            </span></h1>
         </div>


         <div className=" lg:hidden">
         <FontAwesomeIcon onClick={handledrawer} className=" text-white text-[2.1rem]" icon={faBars}/>
         <div ref={drawerRef} className={` absolute left-0 h-screen top-0 w-4/5
         lg:hidden ${isOpen? 'translate-x-0' : '-translate-x-full'}  bg-white transition-all duration-300 ease-in `}>

            <div className="flex justify-between place-items-center h-[9vh]   p-2 ">
              <div className="h-full flex items-center">
                <img className="h-full" src={Logo} />
                <h1 className="text-center font-bold tracking-[1px] text-gray-800 leading-4">ELLE POWER <span>
                    <p className="text-[0.7rem] font-medium">Trading & Services</p>
                  </span></h1>
              </div>
            <FontAwesomeIcon onClick={handledrawer} className="text-[1.9rem] mr-2" icon={faArrowLeft} />
            </div>
                <ul className="mt-4 p-4">
                {nav.map((li)=>(
                  <Link to={li.link} offset={li.offset} duration={800} smooth={true} onClick={() => setisOpen(false)} >
                      <li className="p-1.5 text-lg" key={li.text}>{li.text}</li>
                  </Link>
              
            ))}
            <Button className=' mt-4 lg:hidden'   onClick={()=>setisfallback(true)} title="GET A FREE QUOTE"/>
                </ul>
             
         </div>
       

         </div>

         
         <ul className="hidden lg:flex ">
         {nav.map((li)=>(
               <Link to={li.link} offset={li.offset} duration={700} smooth={true} >
                <li
                className="px-3 py-2 font-semibold font-secondary text-base text-neutral-800 xl:px-4 xl:text-[1.1rem]
                transition-all duration-300 hover:text-red-900 cursor-pointer"
                 key={li.text}>{li.text}</li></Link>
            ))}
         </ul>
         <div className="hidden lg:block">
        <Button className=''   onClick={()=>setisfallback(true)} title="GET A FREE QUOTE"/>
        </div>


      <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-60 z-50">
  <p>Loading...</p> {/* You can replace this with a spinner or skeleton */}
</div>}>
  {isfallback && <FallbackCard onclose={() => setisfallback(false)} />}
</Suspense>

    </div>
  )
}

export default Header
