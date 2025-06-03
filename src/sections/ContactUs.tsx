import image from "../assets/messback.webp"
import MessageForm from "../components/MessageForm"

function ContactUs() {
  return (
  <div id="contact" className="w-full pb-8">
  <div
    className="w-full min-h-screen relative bg-cover bg-center lg:min-h-[60vh]"
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/80 z-10"></div>

    {/* Content Layer */}
    <div className="w-full h-full absolute top-0 left-0 grid grid-cols-1 justify-items-center z-50 py-8 gap-8 lg:grid-cols-2">
      {/* Text Section */}
      <div className="w-[95%] flex flex-col items-center lg:items-start lg:pl-8 lg:mt-16 text-white text-center lg:text-start">
        <h1 className="text-3xl font-medium lg:font-semibold lg:text-4xl xl:text-5xl">
          Get in Touch with Our <br />
          <span className="text-ctmred">Electrical Experts</span>
        </h1>
        <p className="font-secondary mt-4 text-xl max-w-2xl">
          Have questions or need a quote for your next electrical project? Fill out
          the form below and our team will get back to you shortly.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full flex justify-center px-4 lg:w-[70%]">
        <MessageForm />
      </div>
    </div>
  </div>
</div>

  )
}

export default ContactUs
