"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

function About() {
  return (
    <main>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <section className='max-w-screen-2xl bg-gradient-to-br from-blue-800 to-blue-400 via-yellow-300 text-gray-700 h-full pb-10 pt-20 '>

          {/* heading */}
          <div>
            <h5 className='text-5xl text-center mb-10 pt-10 text-yellow-900 font-bold'>About me</h5>

          </div>
          {/* parent */}

          <div className='flex lg:flex-row flex-col lg:justify-between justify-around items-center  max-w-screen-xl mx-auto lg:h-[80vh] px-5 border-2 rounded-lg  ml-5 mr-5 gap-20'>
            {/* cild div */}


            {/* duplicate */}

            <div className='block sm:hidden pt-20 '>
              <Image className='rounded-xl' src={"/img.jpg"} height={500} width={500} alt="Hero image"></Image>
            </div>


            <div className='max-w-[800px] text-2xl font-mono pt-10 mb-10 '>
              <p>{`I've worked on various projects using these technologies, building user-friendly interfaces that are both efficient and aesthetically pleasing.`}
                I am passionate about creating seamless user experiences and continuously learning new technologies to enhance my skills.
                Feel free to reach out for collaborations or discussions!</p>
            </div>


            {/* child 2 */}
            <div className='hidden sm:block '>
              <Image src={"/img.jpg"} height={300} width={300} alt="Hero image"></Image>
            </div>
          </div>

        </section>

        <section className='max-w-screen-2xl bg-gradient-to-br from-blue-800 to-blue-400 via-yellow-300 pb-10'>

          <h2 className='text-center text-5xl lg:text-6xl font-bold mb-10 mt-10 text-yellow-900 pt-10'>Skills</h2>

          <div className='max-w-screen-lg mx-auto'>
            <div className=' ml-5 mr-5 grid lg:grid-cols-3 grid-col-1  text-center  justify-center gap-16 items-center lg:pl-20 border-2 pb-10  pt-10 text-gray-800'>
            {/* html */}
            <div className='w-[220px]'>
              <div>
                <div className='flex justify-center items-center'>
                  <Image src={"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-1024.png"} height={150} width={150} alt="Hero image"></Image>
                </div>
                <h3 className='text-2xl font-bold mb-3 mt-10'>Html 5</h3>
              </div>
              <p className="text-lg  mt-2">
                HTML5 is the backbone of my web development skills
              </p>
            </div>

            {/* css */}
            <div className='w-[220px]'>
              <div>
                <div className='flex justify-center items-center'>
                  <Image src={"https://www.shareicon.net/data/512x512/2015/09/11/99500_css3_512x512.png"} height={150} width={150} alt="Hero image"></Image>
                </div>
                <h3 className='text-2xl font-bold mb-2 mt-2'>CSS3</h3>
              </div>
              <p>  I possess strong expertise in CSS3, enabling me to craft visually appealing and responsive designs.</p>
            </div>


            {/* js  */}
            <div className='w-[220px]'>
              <div>
                <div className='flex justify-center items-center'>
                  <Image src={"https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png"} height={400} width={400} alt="Hero image"></Image>
                </div>
                <h3 className='text-2xl font-bold mt-8 mb-3'>Javascript</h3>
              </div>
              <p> I have developed strong skills in JavaScript, a vital language for web development..</p>
            </div>


            {/* ts */}
            <div className='w-[220px]'>
              <div>
                <div className='flex justify-center items-center'>
                  <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"} height={150} width={150} alt="Hero image"></Image>
                </div>
                <h3 className='text-2xl font-bold mb-5 mt-5'>Typescript</h3>
              </div>
              <p>  Typescript is a powerful, statically typed superset of JavaScript that enhances the development process by providing type safety and advanced tooling..</p>
            </div>

            {/* react */}
            <div className='w-[220px]'>
              <div>
                <div className='flex justify-center items-center mb-5'>
                  <Image src={"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"} height={150} width={150} alt="Hero image"></Image>
                </div>
                <h3 className='text-2xl font-bold mb-4'>React</h3>
              </div>
              <p> React is a popular JavaScript library used for building user interfaces, particularly for single-page applications (SPAs)..</p>
            </div>

            {/* Nextjs */}
            <div className='w-[220px]'>
              <div>
                <div className='flex justify-center items-center'>
                  <Image src={"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"} height={150} width={150} alt="Hero image"></Image>
                </div>
                <h3 className='text-2xl font-bold mb-5 mt-5'>Next js</h3>
              </div>
              <p> Next.js is a powerful React framework that enables developers to build server-rendered applications with ease..</p>
            </div>
            </div>

          </div>

        </section>

      </motion.div>
    </main>

  );
}

export default About;
