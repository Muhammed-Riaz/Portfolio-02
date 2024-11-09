"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

function Projects() {

  return (

    <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}>
  

    <section className="max-w-screen-xl mx-auto mt-20 bg-[#f2f2f2] border-2 ">

  <div className="max-w-screen-xl mx-auto bg-[#f2f2f2] ">
    
    <h1 className="text-center  text-4xl lg:text-6xl mt-10  font-bold bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-blue-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] ">Projects</h1>
    </div>

      {/* parent div */}
      <div className="grid grid-cols-1  lg:grid-cols-2  max-w-screen-lg lg:justify-center lg:items-center mx-auto mt-1 lg:mt-5 gap-48 p-10 ">


        {/* childs */}

        <div className="max-w-[400px] hover:scale-105 duration-500 mt-5">
          <Link href={"https://e-commerce-website-inky-six.vercel.app"}>
          <Image src={"/figma.png"} height={500} width={500} alt="logo"></Image>
          <h3 className="text-2xl text-center mt-5 underline text-blue-500">E-commerce Website</h3>
          </Link>
        </div>


        <div className="max-w-[400px] hover:scale-105 duration-500 mt-5">

        <Link href={"https://music-website-beta.vercel.app"}>
          <Image src={"/music.png"} height={500} width={500} alt="logo"></Image>
          <h3 className="text-2xl text-center  mt-5 underline text-blue-500">Music-website</h3>
          </Link>
       
        </div>


        <div className="max-w-[400px] hover:scale-105 duration-500 mb-5">
        <Link href={"https://flow-chart-2q98.vercel.app"}>
          <Image src={"/flow.png"} height={500} width={500} alt="logo"></Image>
          <h3 className="text-2xl text-center mt-5 underline text-blue-500">Flow-chart</h3>
          </Link>
        </div>


        <div className="max-w-[400px] hover:scale-105 duration-500 mb-5">
        <Link href={"hackathone-a2wn.vercel.app"}>
          <Image src={"/resume.png"} height={500} width={500} alt="logo"></Image>
          <h3 className="text-2xl text-center  mt-5 underline text-blue-500">Resume Builder</h3>
          </Link>
        </div>
  
      
      </div>
      </section>


    </motion.div> 

  )
}

export default Projects