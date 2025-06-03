  export type props = {
      title : string,
      subtitle : string,
      description : string,
      child? : React.ReactNode,
      class? : string
  }
  function Card(props : props) {
    
    return (
      <div className={`${props.class} p-6 rounded-2xl bg-white`}>
        <div>
        {props.child}
        </div>
        <h1 className="text-2xl font-bold text-ctmred lg:text-4xl">{props.title}</h1>
        <h2 className="text-xl mt-2 font-medium text-gray-800">{props.subtitle}</h2>
        <p className="mt-4 text-sm text-gray-600 xl:text-lg">{props.description}</p>
      </div>
    )
  }

  export default Card
