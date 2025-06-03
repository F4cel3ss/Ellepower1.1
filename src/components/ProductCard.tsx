
type producttype = {
    image : string,
    name : string,
    classname?:string
}
function ProductCard( {image, name, classname } : producttype) {
  return (
     <div className={`w-full  shadow-card p-4 flex flex-col items-center ${classname}`}>
      <div className='w-full h-[20vh] md:h-[22vh] xl:h-[35vh]'>
        <img  className='w-full h-full object-cover' src={image} />
      </div>
        <h1 className='text-center mt-4 font-medium text-ctmred'>{name}</h1>
      
    </div>
  )
}

export default ProductCard
