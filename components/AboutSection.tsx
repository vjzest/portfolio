// src/app/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { Download, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const timeline = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      company: "CMT AI",
      description:
        "Leading full-stack development projects using React, Node.js, and MongoDB.",
    },
    {
      year: "2021 - 2025",
      title: "Bachelor of Technology",
      company: "BIET JHANSI",
      description:
        "Information Technology, focusing on software development and web technologies.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-5 gap-16 items-start"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-3xl font-semibold mb-6">
              Hello! I'm Vijay Maurya
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with over 3 years of
              experience in creating dynamic and responsive web applications. I
              love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-5 w-5 text-teal-400" />
                <span>Available for work</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:scale-105 transition-transform text-white font-bold shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="lg:col-span-3 space-y-8 relative"
          >
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/20"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="pl-12 relative"
                variants={itemVariants}
              >
                <div className="absolute left-4 top-4 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full border-4 border-slate-900"></div>
                <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg hover:border-white/20 transition-all">
                  <p className="text-teal-400 font-semibold mb-2">
                    {item.year}
                  </p>
                  <h4 className="font-bold text-xl text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-purple-400 font-medium mb-3">
                    {item.company}
                  </p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
