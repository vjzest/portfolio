// src/app/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Download,
  Calendar,
  MapPin,
  Code,
  Award,
  Briefcase,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const timeline = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      company: "CMT AI",
      description:
        "Leading full-stack development projects using React, Node.js, and MongoDB.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: "2021 - 2025",
      title: "Bachelor of Technology",
      company: "BIET JHANSI",
      description:
        "Information Technology, focusing on software development and web technologies.",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  const stats = [
    {
      number: "3+",
      label: "Years Experience",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      number: "50+",
      label: "Projects Done",
      icon: <Target className="h-5 w-5" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="py-32 px-4 bg-[#0a0f1e] text-white relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">
              Get to know me
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                <span className="text-indigo-400">{stat.icon}</span>
              </div>

              <motion.h3
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          {/* Personal Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Hello! I'm Vijay Maurya
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of
                experience in creating dynamic and responsive web applications.
                I love turning complex problems into simple, beautiful, and
                intuitive solutions.
              </p>

              {/* Info badges */}
              <div className="space-y-3 mb-8">
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <MapPin className="h-4 w-4 text-indigo-400" />
                  </div>
                  <span>Noida, India</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Calendar className="h-4 w-4 text-green-400" />
                  </div>
                  <span>Available for work</span>
                </motion.div>
              </div>

              {/* Download button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium shadow-lg border-0"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-3 space-y-6 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/50 via-blue-500/50 to-transparent" />

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="pl-16 relative"
                variants={itemVariants}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-6 top-6 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  <div className="w-3 h-3 bg-indigo-500 rounded-full border-4 border-[#0a0f1e] ring-2 ring-indigo-500/20" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      <span className="text-indigo-400">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-indigo-400 font-medium text-sm mb-2">
                        {item.year}
                      </p>
                      <h4 className="font-bold text-xl text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 font-medium text-sm">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
            Why Work With Me?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Code",
                desc: "Writing maintainable, scalable, and well-documented code",
              },
              {
                title: "Fast Delivery",
                desc: "Meeting deadlines without compromising on quality",
              },
              {
                title: "Client Focus",
                desc: "Understanding requirements and delivering beyond expectations",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}