"use client";
import { motion } from "framer-motion";

function Contact() {

  return (

    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    > 
    <div className="h-[13vh]"></div>
      <main className="max-w-screen-2xl mx-auto bg-gradient-to-br from-blue-800 to-blue-400 via-yellow-300 p-2">

      <div className="h-[10vh] text-4xl sm:text-6xl text-yellow-800 flex justify-center items-center font-bold pt-10"> Contact Us
      </div>
    
          <div className="max-w-screen-sm mx-auto mt-10">
          <div className=" bg-gradient-to-br from-blue-800 to-blue-400 via-red-300 p-10 rounded-[10%] text-white font-mono text-xl">
            <label htmlFor="Name" className="text-xl label">Full name:</label>
            <br />
            <input
              className="w-full max-w-[30rem] p-2 rounded-lg mt-3 mb-6 text-black"
              type="text"
              required
              placeholder="Enter Your Name"
            />
            <br />
            <label htmlFor="Number" className="text-xl label">Phone:</label>
            <br />
            <input
              className=" w-full max-w-[30rem] p-2 rounded-lg mt-3 mb-6 text-black"
              type="tel"
              required
              placeholder="Enter your Number"
            />
            <br />
            <label htmlFor="Email" className="text-xl label">Email:</label>
            <br />
            <input
              className=" w-full max-w-[30rem] p-2 rounded-lg mt-3 mb-6 text-black"
              type="email"
              required
              placeholder="example@gmail.com"
            />
            <br />
            <label htmlFor="message" className="text-xl label">Message:</label>
            <br />
            <textarea
              className="textarea w-full max-w-[30rem] p-2 rounded-lg mt-3 mb-6 text-black"
              name="message"
              required
              placeholder="message ..."
            ></textarea>
            <br />
            <button
              type="submit"
              className="button bg-blue-600 text-white border border-gray-300 w-full max-w-[8rem] capitalize p-2 font-semibold rounded-md text-sm shadow-md transition duration-200 ease-in-out hover:bg-blue-700 hover:shadow-blue-500/50"
            >
              Submit
            </button>
          </div>
          </div>
    
      </main>

    </motion.div>
  );
}

export default Contact;
