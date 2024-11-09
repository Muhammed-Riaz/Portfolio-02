"use client"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


function Hero() {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <section className='max-w-screen-2xl pt-10 relative '>
     
          <div className='max-w-screen-xl mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center h-auto font-mono '>
          
          {/* parent */}

          {/* child  */}

          <div className='max-w-[600px] lg:pt-20 pt-10 mb-20  text-center'>
            <h3 className='text-2xl  relative z-20 md:text-3xl lg:text-5xl font-bold text-blue-500  dark:text-blue-600 font-sans tracking-tight mb-8'>Hello {`I'm `}</h3>

            <TypeAnimation
              sequence={[
                'Riaz',
                1000,
                'Web Developer',
                1000,
                'UI / Ux Designer ',
                1000,
                'Full stack developer',
                1000
              ]}
              wrapper="span"
              speed={40}
              className=" text:3xl sm:text-4xl lg:text-5xl font-bold left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-600 via-blue-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"
              repeat={Infinity}
            />


            <br className='lg:mb-5 ' />

            <div className='max-w-[500px] sm:block lg:hidden flex justify-center items-center '>

              <motion.img
                className='pt-10'
                src="/img.png"
                alt="Description"

                initial={{ transform: "rotateX(-90deg)" }}
                animate={{ transform: "rotateX(1deg)" }}
                transition={{ duration: 1.5 }}
                style={{ width: '50%', height: 'auto', borderRadius:"10%"}}
              />
            </div>


            <div className='font-medium pt-10 text-lg  px-10 lg:px-10 lg:text-2xl  bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-600 via-blue-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] font-mono text-left'>
              {`I'm a web developer with extensive experience my expertise is to create websites (UI/Ux) Design and With a strong foundation in front-end and back-end technologies, I specialize in building responsive web applications that bring ideas to life. My goal is to deliver high-quality, scalable solutions that exceed client expectations.Let's collaborate to turn your vision into reality! ...`}
            </div>


          </div>


          {/* chil 02 image */}
          <div className='max-w-[500px] hidden lg:block'>

            <motion.img
              className='rounded-lg w-12 h-36'
              src="/img.png"
              alt="Description"

              initial={{ transform: "rotateX(-90deg)" }}
              animate={{ transform: "rotateX(1deg)" }}
              transition={{ duration: 1.5 }}
              style={{ width: '100%', height: 'auto' }}
            />

          </div>

       
        </div>
    
      </section>

  </motion.div>

  )
}

export default Hero