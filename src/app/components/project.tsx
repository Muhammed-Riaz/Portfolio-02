"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden"
    >
      {/* Decorative circles from Hero component */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-50 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-screen-xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl lg:text-6xl mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-4"
          >
            Projects
          </motion.h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg mx-auto mt-10 gap-16 p-10">
          {[
            {
              title: "Rental E-commerce website",
              image: "/mine.png",
              href: "http://milestone3-ecommerce-ly9d.vercel.app"
            },

            {
              title: "Read Blogs",
              image: "/blog.png",
              href: "https://milestone-3-blogs-b745.vercel.app/"
            },

            {
              title: "Music Website",
              image: "/music.png",
              href: "https://music-website-beta.vercel.app"
            },
            {
              title: "Cloth Store",
              image: "/figma.png",
              href: "https://e-commerce-website-inky-six.vercel.app"
            },
            {
              title: "Flow Chart",
              image: "/flow.png",
              href: "https://flow-chart-2q98.vercel.app"
            },
            {
              title: "Resume Builder",
              image: "/resume.png",
              href: "https://hackathone-a2wn.vercel.app"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative"
            >
              <Link href={project.href}>
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-700" />
                  <div className="relative transform hover:scale-105 transition duration-500">
                    <Image
                      src={project.image}
                      height={500}
                      width={500}
                      alt={project.title}
                      className="rounded-xl shadow-xl ring-4 ring-white dark:ring-gray-800"
                    />
                  </div>
                </div>
                <h3 className="text-2xl text-center mt-5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;