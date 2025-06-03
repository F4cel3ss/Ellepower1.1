import { lazy, Suspense, useState } from 'react'
import { Button, Buttonlabel } from '../components/Button'
import Item from '../assets/Item'
import ProductCard from '../components/ProductCard'
// import FallbackCard from '../components/FallBackCard'
const FallBackCard = lazy(()=>import('../components/FallBackCard'))

function Product() {
  const [isfallback,setisfallback] = useState<boolean>(false)
  return (
    <div id='product' className='w-full mt-16 flex flex-col items-center'>
      
      <div className='w-[95%] lg:w-[80%]  flex flex-col items-center lg:flex-row lg:justify-between'>
        <div className='w-full flex flex-col items-center lg:items-start '>
            <Buttonlabel title='OUR PRODUCT'/>
            <h1 className='text-center text-5xl font-semibold mt-8 lg:leading-16 whitespace-nowrap lg:text-start'>Elle Power <br/> <span className='text-ctmred'>Product Line</span></h1>
        </div>
        <div className='flex flex-col items-center lg:items-end'>
            <p className='mt-8 text-center  text-black/60 font-secondary lg:text-right'>We supply a wide range of high-quality electrical products, carefully selected to meet the demands of both residential and commercial applications, ensuring safety, efficiency, and long-lasting performance</p>
            <Button className='mt-8' title='CONTACT US TO INQUIRE' onClick={()=>setisfallback(true)} />
        </div>

      </div>

     <div className='w-full flex justify-center mt-32'>
         <div className='w-[95%] md:w-[80%] lg:w-[90%] grid grid-cols-2 justify-items-center gap-2 md:gap-4 lg:grid-cols-4 '>
            {Item.map((product,index)=>((
                 <ProductCard key={index} image={product.image} name={product.name} classname={`${index === 8? 'lg:col-start-2' : ''}`}  />
            )))}
      </div>
     </div>
     <Suspense fallback={<h1>loading...</h1>}>
      {isfallback && <FallBackCard onclose={()=>setisfallback(false)} />}
     </Suspense>
    </div>
  )
}

export default Product
