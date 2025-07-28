"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, Code, Heart, Zap, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFF9E5]">
              About Me
            </h2>
            
            {/* Animated Bio Cards */}
            <div className="space-y-4">
              <motion.div
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#4A9782]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Code className="w-4 h-4 text-[#4A9782]" />
                  </div>
                  <p className="text-[#FFF9E5] leading-relaxed">
                    Hi! I&apos;m <span className="text-[#4A9782] font-semibold">Abdelrahman</span>, a passionate backend engineer and fullstack developer based in Istanbul. I love building robust, scalable systems and crafting delightful user experiences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#DCD0A8]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#4A9782]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-[#4A9782]" />
                  </div>
                  <p className="text-[#FFF9E5] leading-relaxed">
                    I thrive in collaborative teams, enjoy learning new technologies, and believe in the power of software to make a positive impact.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mission Section */}
            <motion.div
              className="bg-gradient-to-r from-[#4A9782]/20 to-[#DCD0A8]/20 backdrop-blur-md rounded-xl p-6 border border-[#4A9782]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-[#4A9782]" />
                <h3 className="text-xl font-semibold text-[#FFF9E5]">My Mission</h3>
              </div>
              <p className="text-[#FFF9E5]/90 leading-relaxed">
                My mission is to empower people and businesses through technology. I code to create tools that simplify life, foster connection, and inspire innovation—always with a touch of creativity and fun.
              </p>
            </motion.div>

            <motion.a
              href="#"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A9782] text-[#FFF9E5] font-semibold rounded-lg hover:bg-[#4A9782]/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Right: Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end relative lg:-ml-8"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Floating Tech Icons */}
              {[
                { icon: "⚛️", delay: 0, position: "top-2 -right-2" },
                { icon: "🚀", delay: 0.2, position: "top-4 -left-4" },
                { icon: "💻", delay: 0.4, position: "bottom-2 -right-4" },
                { icon: "🔧", delay: 0.6, position: "bottom-4 -left-2" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} text-xl`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 0.5, 
                    delay: item.delay,
                    y: { duration: 2, repeat: Infinity, delay: item.delay }
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-[#4A9782]/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-[#DCD0A8]/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A9782]/20 to-[#DCD0A8]/20 rounded-full blur-xl"></div>

              {/* Main Avatar */}
              <motion.div
                className="relative w-full h-full bg-white/10 backdrop-blur-md border border-[#DCD0A8]/30 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-36 h-36 md:w-40 md:h-40 bg-[#4A9782]/20 rounded-full mx-auto mb-4 flex items-center justify-center"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-5xl md:text-6xl">👤</span>
                  </motion.div>
                  <motion.p
                    className="text-[#FFF9E5]/80 text-sm"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Your Photo Here
                  </motion.p>
                </div>
              </motion.div>

              {/* Floating Stars */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-[#4A9782]"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${10 + (i * 20)}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Star className="w-2 h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 