import React from 'react';

export default function Cta() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div 
        className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 
                  bg-[#FF8486] rounded-[14px] p-6 md:p-10 lg:p-[78px_31px]"
      >
        <div className="flex flex-col items-start gap-3 w-full md:max-w-[796px]">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl text-white w-full">
            Ready to Transform Your Nails?
          </h2>
          <p className="font-inter font-normal text-base text-white max-w-full md:max-w-[484px] leading-6 tracking-[-0.01em]">
            Join Gigi DK Nails and unlock a world of stunning designs, exclusive offers, and personalized nail care. Create your account today and start your beauty journey!
          </p>
        </div>
        
        <button className="bg-[#7A0002] text-white font-inter font-medium text-base py-2.5 px-4 rounded-md w-full md:w-auto md:min-w-[195px] flex justify-center items-center">
          Create your account
        </button>
      </div>
    </section>
  );
}

