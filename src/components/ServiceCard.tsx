import React from 'react';

 export type serviceProps = {
  image: string;
  title: string;
  description: string;
  child: React.ReactNode;
};

function ServiceCard({ image, title, description, child }: serviceProps) {
  return (
    <div className="h-[65vh] md:h-[50vh] xl:h-[70vh] bg-white border border-black/20 overflow-hidden rounded-xl">
      <img className='h-[60%] w-full object-cover' src={image} alt={title} />
      <div className='flex flex-col items-center px-4'>
        <div className='mt-[-3rem] w-[5rem] h-[5rem] flex justify-center items-center border-2 border-white bg-ctmred rounded-full text-4xl text-ctmaccent '>{child}</div>
        <h1 className='text-2xl font-medium mt-4'>{title}</h1>
        <p className='text-center mt-8 font-secondary text-black/70'>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
