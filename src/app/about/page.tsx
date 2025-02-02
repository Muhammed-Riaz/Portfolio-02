"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

function About() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  const skills = [
    {
      name: "HTML5",
      image: "https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-1024.png",
      description: "HTML5 is the backbone of my web development skills"
    },
    {
      name: "CSS3",
      image: "https://www.shareicon.net/data/512x512/2015/09/11/99500_css3_512x512.png",
      description: "I possess strong expertise in CSS3, enabling me to craft visually appealing and responsive designs."
    },
    {
      name: "JavaScript",
      image: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png",
      description: "I have developed strong skills in JavaScript, a vital language for web development."
    },
    {
      name: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      description: "TypeScript enhances the development process by providing type safety and advanced tooling."
    },
    {
      name: "React",
      image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      description: "React is my go-to library for building dynamic and responsive user interfaces."
    },
    {
      name: "Next.js",
      image: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
      description: "Next.js enables me to build performant, server-rendered applications with ease."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-50 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />


      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-14">
        {/* About Section */}
        <motion.section 
          className="mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            {...fadeInUp}
          >
            About Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a passionate web developer with a keen eye for creating seamless user experiences. 
                With expertise in modern web technologies, I specialize in building responsive and 
                performant applications that bring ideas to life. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>
            </motion.div>
           
            <motion.div 
            className="max-w-2/5"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-700" />
              <motion.img
                className="relative w-96 h-96 mx-auto object-cover rounded-full ring-4  dark:ring-gray-800 shadow-2xl"
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
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            {...fadeInUp}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 relative">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      layout="fill"
                      objectFit="contain"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>


    </motion.div>
  );
}

export default About;