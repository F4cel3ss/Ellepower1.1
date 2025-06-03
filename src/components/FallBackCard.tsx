import React, { useEffect, useRef } from 'react'
import AnimationData from "../assets/Animation - 1745122746597.json"
import Player from 'lottie-react';
import { Button } from './Button';
type props ={
    onclose : React.MouseEventHandler<HTMLButtonElement>
}

function FallbackCard({onclose}: props) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            const fakeEvent = {} as React.MouseEvent<HTMLButtonElement>;
            onclose(fakeEvent); 
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [onclose]);
    
useEffect(()=>{
    document.body.style.overflow = 'hidden'

    return ()=>{
        document.body.style.overflow = 'auto'
    }
},[])
  return (
    <div ref={modalRef} className='fixed bg-black/90 top-0 left-0 z-50 w-full h-full flex justify-center items-center'>
      <div className='bg-white p-4 w-[70%] sm:w-[40%] lg:w-[25%] flex flex-col items-center ] '> 
      <Player
          autoplay
          loop
          animationData={AnimationData}
        />
        <h2 className='mt-4 font-bold text-ctmred text-center'>503 Service Unavailable</h2>
        <p className='mt-2 text-sm text-center'>Oops! This feature isn’t available at the moment. Hang tight — we’re working on it!</p>
        {/* <Button className={'mt-2 bg-primaryred text-white px-8 py-2 rounded-lg '} text={'Close'} onClick={onclose}  /> */}
        <button onClick={onclose} className='px-8 py-2 bg-ctmred rounded-lg mt-4 cursor-pointer text-ctmaccent'>Close</button>
      </div>
    </div>
  )
}

export default FallbackCard
