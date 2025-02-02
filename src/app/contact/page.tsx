"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({ name: '', phone: '', email: '', message: '' });
        }, 2000);
      } else {
        throw new Error(result.message || "Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  const inputClasses = "w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500";

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
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg"
          >
            Have a question or want to work together? {`I'd`} love to hear from you!
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-2">
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                placeholder="Your Name .."
                className={inputClasses}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Phone
              </label>
              <input
                type="tel"
                required
                value={formState.phone}
                onChange={(e) => setFormState({...formState, phone: e.target.value})}
                placeholder="Phone .."
                className={inputClasses}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                placeholder="Email"
                className={inputClasses}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Message
              </label>
              <textarea
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                placeholder="Your message here..."
                rows={4}
                className={inputClasses}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white 
                ${isSubmitted ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600'}
                hover:from-indigo-700 hover:to-purple-700 
                focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                transition-all duration-200 flex items-center justify-center gap-2`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center text-gray-600 dark:text-gray-300"
          >
            <p className="mb-2">Or reach out directly:</p>
            <a href="mailto:contact@example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              riazahmedzaur110@gmail.com
            </a>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Contact;