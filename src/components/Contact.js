import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* 🔹 Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      {/* 📨 Contact Form */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl mb-12">
        <p className="text-gray-300 text-center mb-6">
          Have a project, collaboration, or just want to say hi? Feel free to drop a message!
        </p>

        <form
          action="https://formsubmit.co/bhamregayatri28@gmail.com"  // ✅ your email here
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-black/40 border border-white/20 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-black/40 border border-white/20 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded bg-black/40 border border-white/20 text-white placeholder-gray-400"
          ></textarea>

          {/* Hidden config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Thanks for reaching out Gayatri! I’ll get back to you soon." />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-md transition w-fit mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* 🔗 Social Media Links */}
      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://github.com/GayatriBhamre"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-pink-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gayatri-bhamre-731829249"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-pink-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/gayatri._.bhamre?igsh=MXBtcWZzenNrcHk2NQ=="
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:bhamregayatri28@gmail.com"
          className="text-white hover:text-pink-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;
