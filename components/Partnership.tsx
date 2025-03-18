import Image from "next/image"
import Link from "next/link"

export default function Partnership() {
    return (
      <section className="flex flex-col justify-center items-center w-full py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="flex flex-col items-center max-w-4xl w-full gap-4 md:gap-6">
          {/* Intro paragraph */}
          <div className="flex flex-col items-center w-full mb-4">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl text-black text-center mb-2">
              Want a Partnership?
            </h2>
            <p className="font-inter font-normal text-base text-[#4B4B4B] text-center">Partner with Gigi DK Nails</p>
          </div>
  
          {/* Partnership content */}
          <div className="w-full flex flex-col md:flex-row gap-6 relative">
            {/* Image placeholder */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[332px] bg-[#FFCACA]">
              {/* You can replace this with an actual image */}
               <Image 
                src="/images/icon.png" 
                alt="Gigi DK Nails" 
                width={330} 
                height={332} 
                className="w-full h-full object-cover"
              /> 
            </div>
  
            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-4 md:p-0">
              <h3 className="font-inter font-normal text-xl text-black">Meet Ginett Donfack</h3>
              <p className="font-inter font-medium text-base text-[#747474]">CEO and Founder of Gigi Dk&apos;s Nails.</p>
              <p className="font-inter font-normal text-base text-black">
                Join us as a brand ambassador, retailer, or franchise partner to bring premium nail beauty to more
                clients.
              </p>
              <Link href='/contact' className="bg-[#7A0002] text-white font-inter font-medium text-base py-2.5 px-4 rounded-md w-fit mt-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  