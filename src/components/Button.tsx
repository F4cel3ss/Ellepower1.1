import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons/faSquareArrowUpRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  onClick? : React.MouseEventHandler<HTMLButtonElement> 
  title: string;
  className?: string;
  variant?: 'primary' | 'secondary';
};

type buttonlabel ={
  onclick? : ()=>void;
  title : string
}

//  export const hover:string ="transition-all duration-200 hover:bg-red-800 cursor-pointer hover:scale-105"

  const variants = {
    primary: "bg-ctmred text-white hover:bg-red-800",
    secondary: "border border-gray-400 text-white bg-transparent  hover:bg-ctmred hover:text-white "
  };
  



export const Button: React.FC<Props> = ({ onClick, title, variant="primary", className }) => {
  return (
    <button onClick={onClick} className={`transition-all duration-300 ${variants[variant]} flex items-center justify-between gap-2  p-4 px-8 rounded-full cursor-pointer hover:scale-105 outline-0 ${className} `}>
      {title}
      <FontAwesomeIcon icon={faSquareArrowUpRight} />
    </button>
  );
};

export const Buttonlabel: React.FC<buttonlabel> = ({onclick, title })=>{
  return(
    <button onClick={onclick} className='border border-black/15 px-4 py-2 flex rounded-md gap-2 text-base text-ctmred font-bold '>
     <span>
    <FontAwesomeIcon className='text-xl' icon={faBolt} />
     </span>
      {title}
    </button>
  )
}

