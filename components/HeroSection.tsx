// src/app/components/HeroSection.tsx

"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui
import { TypeAnimation } from "react-type-animation";
import { eccentricFadeIn } from "../lib/animations"; // Assuming this file exists

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vijay-Maurya-Resume.pdf"; // Make sure this resume exists in the /public folder
    link.download = "Vijay-Maurya-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#1a1f2e] to-[#0f172a]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <div className="flex flex-col items-center">
          {/* === ENHANCED CIRCULAR PROFILE PICTURE === */}
          <motion.div
            className="relative mb-8 mt-20 md:mt-16"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              delay: 0.1,
            }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-[#0a0f1e]"></div>
            </div>

            {/* Main profile container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Static gradient border - No rotation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-[3px]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a0f1e] to-[#1a1f2e] p-2">
                  {/* Image container - Perfect Circle */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-purple-500/25">
                    <Image
                      src="/vj1.jpg" // Ensure this path is correct: /public/vj1.jpg
                      alt="Vijay Maurya"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
                      priority
                    />
                    {/* Overlay gradient for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Static floating particles - No animation */}
              <div className="absolute -inset-4 opacity-20">
                <div className="absolute top-0 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-1/4 right-0 w-1 h-1 bg-purple-400 rounded-full"></div>
                <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-pink-400 rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={eccentricFadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl tracking-tight"
          >
            Vijay Maurya
          </motion.h1>

          <motion.div
            variants={eccentricFadeIn}
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 h-12 flex items-center justify-center"
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Frontend Enthusiast",
                  2000,
                  "Full Stack Creator",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p
            variants={eccentricFadeIn}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I transform ideas into reality by building beautiful, responsive,
            and scalable web applications. Currently focused on mastering the
            MERN stack and exploring cutting-edge web technologies.
          </motion.p>
        </div>

        {/* ENHANCED CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: 0.6,
          }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white font-bold px-10 py-4 rounded-2xl group shadow-2xl shadow-purple-500/40 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500 border border-purple-400/30 backdrop-blur-sm relative overflow-hidden"
            onClick={() => scrollToSection("contact")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Mail className="mr-3 h-5 w-5 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">Hire Me</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/5 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:scale-110 transition-all duration-500 px-10 py-4 rounded-2xl backdrop-blur-md shadow-2xl group relative overflow-hidden"
            onClick={() => scrollToSection("projects")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ArrowDown className="mr-3 h-5 w-5 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Explore Projects</span>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .animate-spin-slow {
          /* Animation removed */
        }
      `}</style>
    </section>
  );
}
