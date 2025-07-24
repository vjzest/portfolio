"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce for Chia Seeds",
      description:
        "A niche e-commerce platform dedicated to selling chia seeds, built with a modern tech stack. Features product pages, a shopping cart, and uses Cloudinary for image management.",
      image: "/ecommerce.png",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      github: "https://github.com/vijay-cmtai/chiaseedsfront",
      demo: "https://www.naraaglobal.com",
    },
    {
      title: "Madrid Pharmaceutical Website",
      description:
        "A professional and informative website for a pharmaceutical company, designed to showcase their products, services, and corporate information to a global audience.",
      image: "/madrid.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/vijay-cmtai/MadridPharma1.1",
      demo: "https://www.madridpharma.com",
    },
    {
      title: "TeacherJob - Job Portal",
      description:
        "A dedicated job portal connecting teachers with educational institutions. Built with the MERN stack and utilizes AWS S3 for efficient resume and document storage.",
      image: "/teacherjob.png",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Express.js"],
      github: "https://github.com/vijay-cmtai/TeacherConnect2",
      demo: "https://www.teacherjob.in",
    },
    {
      title: "Propcid - Real Estate Marketplace",
      description:
        "A comprehensive platform for buying and selling properties. It features advanced search, property listings, and uses a Node.js backend with Firebase for storage.",
      image: "/propcid.png",
      tech: ["React", "Next.js", "Node.js", "Express.js", "Firebase"],
      github: "https://github.com/vjzest/PropCIDFrontend",
      demo: "https://propcid.com",
    },
    {
      title: "Jharkhand IT Solutions",
      description:
        "The official company website for a Jharkhand-based IT solutions provider, powered by a custom Node.js backend and a headless CMS for dynamic content.",
      image: "/jharkhand.png",
      tech: ["React", "Next.js", "Node.js", "Express.js", "Contentful CMS"],
      github: "https://github.com/vijay-cmtai/Jharkhand_IT_Sol_Front3",
      demo: "https://jharkhand-it-sol-front3.vercel.app",
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed h-20">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-400/10 text-teal-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    className="bg-gray-800/80 border border-gray-600/50 text-gray-200 hover:bg-gray-700/80 hover:border-gray-500 flex-1 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white flex-1 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
