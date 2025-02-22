"use client"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

function Hero() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-50 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <section className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-14">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white font-sans tracking-tight text-center lg:text-left"
              {...fadeInUp}
            >
              Hello {`I'm `}
            </motion.h3>

            <TypeAnimation
              sequence={[
                'Riaz',
                1000,
                'Web Developer',
                1000,
                'UI / UX Designer ',
                1000,
                'Full stack developer',
                1000
              ]}
              wrapper="span"
              speed={40}
              className="block text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-center  lg:text-left"
              repeat={Infinity}
            />

            {/* Mobile Image */}
            <div className="block lg:hidden w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30" />
              <motion.img
                className="relative w-full h-full object-cover rounded-full ring-4 ring-white dark:ring-gray-800 shadow-xl"
                src="/pic.png"
                alt="Description"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <motion.div 
              className="prose max-w-none text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-6 text-center lg:text-left"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="leading-relaxed mt-16">
                {`I'm a web developer with extensive experience in creating websites with modern UI/UX Design. With a strong foundation in front-end and back-end technologies, I specialize in building responsive web applications that bring ideas to life. My goal is to deliver high-quality, scalable solutions that exceed client expectations. Let's collaborate to turn your vision into reality!`}
              </p>

              <div className='pt-6'>
              <a
                href="/Riaz_Resume.pdf
"
                download="Riaz_Ahmed_CV.pdf"
                className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300'>
                Download CV
              </a>
            </div>
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div 
            className="hidden lg:block w-2/5"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-700" />
              <motion.img
                className="relative w-96 h-96 mx-auto object-cover rounded-full ring-4 ring-white dark:ring-gray-800 shadow-2xl"
                src="/pic.png"
                alt="Description"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Hero;