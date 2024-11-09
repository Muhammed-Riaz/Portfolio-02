"use client"

import { motion } from "framer-motion";


function Services() {
  return (

    <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}>

    <section className="max-w-screen-2xl  mt-20 bg-[#f2f2f2]">

      

      <div className="pt-10 text-[#c2f1db] text-center bg-[#f2f2f2] ">

        <div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-blue-500 to-pink-500  lg:mb-24 ">
             Services
          </h1>
        </div>


        <div className="max-w-screen-xl mx-auto flex justify-around mb-10 bg-[#f3f3f3] lg:flex-row sm:flex-col flex-col gap-20 items-center p-5 m-10 pb-20">
          <div className="max-w-[300px]  h-[300px] bg-green-600    transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-110 hover:rotate-[-6deg]">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-24 h-24 mx-auto">
                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm4.78 1.97a.75.75 0 0 1 0 1.06L5.81 8l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm2.44 1.06a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97Z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="font-bold text-xl mb-2 ">Frontend</div>
            <div className="text-lg font-sans pb-10">I specialize in creating engaging and user-friendly interfaces using the latest frontend technologies to enhance the user experience.</div>
          </div>

          <div className="max-w-[300px] h-[300px] bg-orange-600 transition-transform duration-300 ease hover:scale-110">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-24 h-24 mx-auto">
                <path fillRule="evenodd" d="M6.333 4.478A4 4 0 0 0 1 8.25c0 .414.336.75.75.75h3.322c.572.71 1.219 1.356 1.928 1.928v3.322c0 .414.336.75.75.75a4 4 0 0 0 3.772-5.333A10.721 10.721 0 0 0 15 1.75a.75.75 0 0 0-.75-.75c-3.133 0-5.953 1.34-7.917 3.478ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"></path>
                <path d="M3.902 10.682a.75.75 0 1 0-1.313-.725 4.764 4.764 0 0 0-.469 3.36.75.75 0 0 0 .564.563 4.76 4.76 0 0 0 3.359-.47.75.75 0 1 0-.725-1.312 3.231 3.231 0 0 1-1.81.393 3.232 3.232 0 0 1 .394-1.81Z"></path>
              </svg>
            </div>
            <div className="font-bold text-lg mb-5">Backend</div>
            <div className="text-lg font-sans">I excel in building robust and scalable backend systems to handle complex business logic and ensure seamless operations.</div>
          </div>

          <div className="max-w-[300px] h-[300px] bg-blue-600  transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-110 hover:rotate-[6deg]">
            <div className="ani">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-24 h-24 mx-auto">
                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2.22 1.97a.75.75 0 0 0 0 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0ZM8.75 8.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="font-bold text-lg mb-5">FullStack</div>
            <div className="text-lg font-sans">I have expertise in both frontend and backend, allowing me to develop complete web solutions that meet all requirements.</div>
          </div>
        </div>


      </div>


    </section>
    </motion.div> 
    
  );
}

export default Services;
