import prof1 from "../assets/fakeprof.webp"
import { Buttonlabel } from '../components/Button'
import TestimonialsCard, { testimonials } from '../components/TestimonialsCard'

function Testimonials() {

    const client:testimonials [] = [
        {image : prof1,
         message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse cum quod eaque quis veritatis ab magnamis veritatis ab magnamis veritatis ab magnamis veritatis ab magnam sunt mol" ,
          name: "john doe",
        position : "electrical engineer"},
                {image : prof1,
         message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse cum quod eaque quis veritatis ab magnamis veritatis ab magnamis veritatis ab magnamis veritatis ab magnam sunt mol" ,
          name: "john doe",
        position : "electrical engineer"},
          {image : prof1,
         message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum esse cum quod eaque quis veritatis ab magnamis veritatis ab magnamis veritatis ab magnamis veritatis ab magnam sunt mol" ,
          name: "john doe",
        position : "electrical engineer"}
       
    ]
  return (
    
    <div className='w-full flex flex-col items-center py-32 mt-4 bg-gray-100 lg:overflow-hidden'>
      <div className='w-[95%] md:w-[80%] grid place-items-center'>
            <Buttonlabel title='TESTIMONIALS' />
            <h1 className='mt-8 text-3xl text-center font-medium md:text-5xl md:font-semibold lg:text-start  lg:leading-16 lg:whitespace-nowrap '>What Our <span className='text-ctmred'>Client Say</span> About Us</h1>
        </div>  

       <div className='w-screen flex justify-center mt-16'>
         <div className='w-[90%] md:w-[80%] lg:w-[95%]  flex  gap-4 overflow-y-auto no-scrollbar lg:justify-center lg:overflow-hidden '>
            {client.map((person)=>(
                <TestimonialsCard message={person.message} image={person.image} name={person.name} position={person.position} />
            ))}
        </div>
       </div>

      
    </div>
  )
}

export default Testimonials
