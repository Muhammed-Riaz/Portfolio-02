"use client"
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: ["Pakistan Sindh Hyderabad"],
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: ["+92 340 2800715", "+92 313 3172244"],
      link: "tel:+923402800715"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: ["riazahmedzaur110@gmail.com"],
      link: "mailto:riazahmedzaur110@gmail.com"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Muhammed-Riaz", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/riaz-ahmed-zaur-a668832b6/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <a
                href={item.link}
                className="group relative p-4 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {item.icon}
              </a>
              <h3 className="mt-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {item.title}
              </h3>
              {item.content.map((text, i) => (
                <p key={i} className="mt-2 text-gray-600 dark:text-gray-300">
                  {text}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-6 py-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center md:text-left"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} Riaz. All rights reserved.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center md:justify-end gap-4 text-sm"
              >
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  Terms & Conditions
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  Sitemap
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;