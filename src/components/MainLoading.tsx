import Animation from "../assets/Animation - 1746021191088 (2).json"
import Player from 'lottie-react';

function MainLoading() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
       <Player
          autoplay
          loop
          animationData={Animation}
          className='h-[50%]'
        />
        <h1 className='text-primaryred text-[3rem] font-black tracking-superwide md:text[4rem]'>Elle Power </h1>
        <p className='text-ctmyellow tet-[1.5rem] font-bold tracking-widelg'>Trading & Services</p>
    </div>
  )
}

export default MainLoading
