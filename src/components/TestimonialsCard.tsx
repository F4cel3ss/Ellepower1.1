import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type testimonials = {
    message : string
    image : string,
    name : string,
    position : string
}
function TestimonialsCard({image,name,position,message} : testimonials) {
  return (

    <div className='min-w-[85%] lg:min-w-0 lg:w-[30%]'>
        <div className='w-full flex flex-col items-center px-8 pt-8 pb-32 bg-white shadow-card'>
            <FontAwesomeIcon className='text-6xl' icon={faQuoteLeft}/>
         <blockquote className='py-8 font-secondary text-center'>
              “{message}”
        </blockquote>

            <div className='text-xl'>
                <FontAwesomeIcon color='darkorange' icon={faStar}/>
                 <FontAwesomeIcon color='darkorange' icon={faStar}/>
                  <FontAwesomeIcon color='darkorange' icon={faStar}/>
                   <FontAwesomeIcon color='darkorange' icon={faStar}/>
                    <FontAwesomeIcon color='darkorange' icon={faStar}/>
                
            </div>
        </div>
        <div className='w-full grid place-items-center mt-[-3rem]'>
            <img className='w-[5rem] rounded-full' src={image} />
            <h1 className='text-2xl font-medium capitalize'>{name}</h1>
            <p className='font-secondary text-ctmred font-medium capitalize'>{position}</p>
        </div>
      
    </div>
  )
}

export default TestimonialsCard
