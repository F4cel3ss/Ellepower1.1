import  { useState, useEffect, lazy, Suspense } from "react";
import Heroimg from "../assets/1687350836573.webp";
import { Button } from "../components/Button";
import Card from "../components/Card";
// import FallbackCard from "../components/FallBackCard";
const FallBackCard = lazy(()=>import('../components/FallBackCard'))
import { Link } from "react-scroll"

type AboutDetails = {
  countmax: number;
  title: string;
  description: string;
};

function Hero() {
  const [isOpen ,setisOpen] = useState<boolean>(false)
 

  const about: AboutDetails[] = [
    {
      countmax: 5000,
      title: "Projects Completed",
      description:
        "Successfully delivered a wide range of electrical projects across residential, commercial, and industrial sectors.",
    },
    {
      countmax: 10,
      title: "Years of Experience",
      description:
        "A decade of proven expertise in providing safe, reliable, and code-compliant electrical solutions.",
    },
    {
      countmax: 100,
      title: "Certified Experts",
      description:
        "A skilled team of licensed electricians and technicians trained to meet the highest industry standards.",
    },
  ];

  // Custom hook to animate counting
  function useCountUp(max: number, duration: number = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = max / (duration / 50); // update every 30ms
      const timer = setInterval(() => {
        start += increment;
        if (start >= max) {
          setCount(max);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [max, duration]);

    return count;
  }

  return (
    <div  className="relative h-[140vh] lg:h-[105vh] xl:h-[115vh] w-full bg-green-900 flex flex-col items-center justify-center ">
      <img
        src={Heroimg}
        className="absolute top-0 left-0 w-full h-full object-cover object-top "
      />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-evenly gap-16 pt-20 pb-8 bg-black/80 ">
        <div className="w-full z-40 text-ctmaccent flex flex-col justify-center items-center">
          <h1
            className="text-3xl px-6 font-black font-secondary text-center leading-[2.5rem] md:leading-[4rem] md:text-6xl lg:text-6xl
        md:px-20 lg:px-32 xl:px-[22rem]"
          >
            Reliable Electric Services For{" "}
            <span className="text-red-600">Every Need</span>
          </h1>

          <p className="text-base mt-4 text-center sm:text-xl text-ctmaccent max-w-2xl">
            Serving residential, commercial, and industrial clients with expert
            workmanship, dependable service, and lasting results.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button onClick={()=>setisOpen(true)} variant="primary" title="BOOK A SERVICE" />
           <Link to="product" offset={-50} smooth={true} duration={700}>
            <Button variant="secondary" title="BROWSE PRODUCT" />
           </Link>
          </div>
        </div>

        <div className="w-full px-6 z-5 gap-4 flex flex-col items-center md:flex-row xl:px-32 ">
          {about.map((data, index) => {
            const count = useCountUp(data.countmax);
            return (
              <Card
                key={index}
                title={ `${count}+`}
                subtitle={data.title}
                description={data.description}
                class="w-full sm:w-[80%] md:w-[60%] md:min-h-[27vh]"
              />
            );
          })}
        </div>
      </div>
      <Suspense fallback={<h1>loading...</h1>}>
        {isOpen && <FallBackCard onclose={()=>setisOpen(false)}/>}
      </Suspense>
    </div>
  );
}

export default Hero;
