"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, User, Mail, Briefcase, ChevronRight } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <User className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'py-2 bg-slate-800/80 backdrop-blur-lg shadow-lg'
      : 'py-4 bg-slate-800'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <div className="group flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold text-xl">R</span>
                </motion.div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  RIAZ
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href}>
                    <span className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                      ${activeSection === item.href 
                        ? 'text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://www.linkedin.com/in/riaz-ahmed-zaur-a668832b6">
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium 
                  hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Hire Me</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Menu className="w-6 h-6 text-white" />
              </SheetTrigger>
              <SheetContent className="bg-slate-800/95 backdrop-blur-lg border-none">
                <SheetHeader>
                  <nav className="mt-8">
                    <ul className="space-y-6">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link href={item.href}>
                            <span className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors py-2">
                              {item.icon}
                              <span className="text-lg">{item.label}</span>
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link href="https://www.linkedin.com/in/riaz-ahmed-zaur-a668832b6">
                          <button className="w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 
                            text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 
                            flex items-center justify-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>Hire Me</span>
                          </button>
                        </Link>
                      </motion.li>
                    </ul>
                  </nav>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;