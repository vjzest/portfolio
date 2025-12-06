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
      label: "Years Exp.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    { number: "50+", label: "Projects", icon: <Target className="h-5 w-5" /> },
    {
      number: "100%",
      label: "Satisfaction",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 bg-[#0a0f1e] text-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-2 block">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern
            technologies.
          </p>
        </motion.div>

        {/* Stats Section - Grid fixed for mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Hello! I'm Vijay Maurya
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              I'm a passionate Full Stack Developer with over 3 years of
              experience in creating dynamic and responsive web applications. I
              love turning complex problems into simple solutions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Calendar className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Available for work</span>
              </div>
            </div>

            {/* 👇 UPDATED BUTTON CODE FOR DOWNLOAD 👇 */}
            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium h-12"
              asChild
            >
              <a
                href="/VijayResumeBest.pdf"
                download="Vijay_Maurya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </Button>
            {/* 👆 UPDATED BUTTON CODE 👆 */}
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8 relative pl-2 md:pl-0"
          >
            {/* Vertical Line */}
            <div className="absolute left-[22px] md:left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent" />

            {timeline.map((item, index) => (
              <div key={index} className="pl-14 relative group">
                {/* Dot */}
                <div className="absolute left-[13px] md:left-[18px] top-5 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0a0f1e] z-10 group-hover:scale-125 transition-transform" />

                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider block mb-1">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-lg text-white leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-medium mb-1">
                    {item.company}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Why Work With Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">
            Why Work With Me?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Clean Code",
                desc: "Maintainable & scalable architecture.",
              },
              {
                title: "Fast Delivery",
                desc: "Deadlines met without quality loss.",
              },
              {
                title: "Client Focus",
                desc: "Exceeding expectations every time.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="w-2 h-2 bg-indigo-400 rounded-full mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
