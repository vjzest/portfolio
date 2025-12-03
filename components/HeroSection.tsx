// src/app/components/HeroSection.tsx

"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { eccentricFadeIn } from "../lib/animations";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#1a1f2e] to-[#0f172a]"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <div className="flex flex-col items-center">
          {/* Profile Picture with Premium Effects */}
          <motion.div
            className="relative mb-8 mt-20 md:mt-16"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.1,
            }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 blur-2xl" />
            </motion.div>

            {/* Main profile container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 group">
              {/* Rotating gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(to right, #6366f1, #3b82f6, #06b6d4, #6366f1)",
                  backgroundSize: "300% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a0f1e] to-[#1a1f2e] p-2">
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-indigo-500/50 ring-2 ring-indigo-400/30 ring-offset-2 ring-offset-[#0a0f1e] group-hover:ring-4 group-hover:ring-indigo-400/50 transition-all duration-500">
                    <Image
                      src="/vj1.jpg"
                      alt="Vijay Maurya"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />
                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-blue-500/20"
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating particles */}
              <div className="absolute -inset-8">
                <motion.div
                  className="absolute top-0 left-1/4 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                  animate={{
                    y: [10, -10, 10],
                    x: [5, -5, 5],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                  animate={{
                    y: [-8, 8, -8],
                    x: [-3, 3, -3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-1/4 w-2 h-2 bg-indigo-300 rounded-full shadow-lg shadow-indigo-300/50"
                  animate={{
                    y: [8, -8, 8],
                    x: [3, -3, 3],
                    scale: [1, 1.6, 1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
              </div>

              {/* Sparkle effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Name Title with Glow */}
          <motion.h1
            variants={eccentricFadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl tracking-tight relative"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-white via-indigo-100 to-blue-100 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 100%" }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Vijay Maurya
            </motion.span>

            {/* Glow effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent blur-lg"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Vijay Maurya
            </motion.span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={eccentricFadeIn}
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 h-12 flex items-center justify-center relative"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
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

          {/* Description */}
          <motion.p
            variants={eccentricFadeIn}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I transform ideas into reality by building beautiful, responsive,
            and scalable web applications. Currently focused on mastering the
            MERN stack and exploring cutting-edge web technologies.
          </motion.p>
        </div>

        {/* CTA Buttons */}
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
          {/* Hire Me Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white font-bold px-10 py-4 rounded-2xl group shadow-2xl shadow-indigo-500/40 hover:shadow-blue-500/60 transition-all duration-500 border-0 overflow-hidden"
              onClick={() => scrollToSection("contact")}
            >
              {/* Animated gradient */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #06b6d4, #3b82f6, #6366f1, #06b6d4)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />

              <Mail className="mr-3 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Hire Me</span>

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 border-2 border-white/50 rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </Button>
          </motion.div>

          {/* Explore Projects Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="relative bg-white/5 border-2 border-white/30 text-white hover:bg-white/10 hover:border-indigo-500/60 transition-all duration-500 px-10 py-4 rounded-2xl backdrop-blur-md shadow-2xl group overflow-hidden"
              onClick={() => scrollToSection("projects")}
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100"
                style={{ backgroundSize: "200% 100%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <ArrowDown className="mr-3 h-5 w-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
              <span className="relative z-10">Explore Projects</span>

              {/* Border glow */}
              <motion.div
                className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-40 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500"
                style={{ backgroundSize: "200% 100%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer group"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
            <motion.div
              className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl"
              animate={{ scale: [0, 1.5, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}