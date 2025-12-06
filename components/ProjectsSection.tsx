"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "HousePlansfiles",
      description:
        "The HousePlansfiles website offers a vast collection of architectural house plans. Built with React and Node.js, it features a user-friendly interface.",
      image: "/houseplansfiles.png",
      tech: ["React", "Node.js", "Express.js", "Contentful CMS"],
      github: "https://github.com/vjzest/ArchitectFrontend",
      demo: "https://architect-frontend-ruby.vercel.app",
    },
    {
      title: "Rare Diamonds Marketplace",
      description:
        "A premium online marketplace for buying and selling rare diamonds. Developed using React and Node.js with Contentful CMS.",
      image: "/Rarediamond.png",
      tech: ["NextJs", "Node.js", "Express.js", "Contentful CMS"],
      github: "https://github.com/vjzest/CraticFrontend",
      demo: "https://cratic-frontend.vercel.app",
    },
    {
      title: "Property Deals Platform",
      description:
        "A comprehensive platform for real estate transactions, allowing users to explore and manage property deals efficiently.",
      image: "/property.png",
      tech: ["NextJs", "Node.js", "Express.js", "Contentful CMS"],
      github: "https://github.com/vijay-cmtai/investorFrontend",
      demo: "https://investordeaa.vercel.app",
    },
    {
      title: "Jwelen E-commerce",
      description:
        "An elegant e-commerce website specializing in jewelry sales. Features a sleek design and dynamic product management.",
      image: "/jwelen.png",
      tech: ["NextJs", "Node.js", "Express.js", "Contentful CMS"],
      github: "https://github.com/vijay-cmtai/Jewelen",
      demo: "https://jewelencmtai.vercel.app",
    },
    {
      title: "Chia Seeds Store",
      description:
        "A niche e-commerce platform dedicated to selling chia seeds. Features product pages, cart, and Cloudinary integration.",
      image: "/ecommerce.png",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
      github: "https://github.com/vijay-cmtai/chiaseedsfront",
      demo: "https://www.naraaglobal.com",
    },
    {
      title: "Madrid Pharma",
      description:
        "A professional website for a pharmaceutical company, showcasing products and corporate information globally.",
      image: "/madrid.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/vijay-cmtai/MadridPharma1.1",
      demo: "https://www.madridpharma.com",
    },
    {
      title: "TeacherJob Portal",
      description:
        "A dedicated job portal connecting teachers with institutions. Utilizes AWS S3 for resume storage.",
      image: "/Teacherjob.png",
      tech: ["React", "Node.js", "MongoDB", "AWS S3"],
      github: "https://github.com/vijay-cmtai/TeacherConnect2",
      demo: "https://www.teacherjob.in",
    },
    {
      title: "Propcid Real Estate",
      description:
        "Platform for buying and selling properties with advanced search. Backend powered by Node.js and Firebase.",
      image: "/propcid.png",
      tech: ["React", "Next.js", "Node.js", "Firebase"],
      github: "https://github.com/vjzest/PropCIDFrontend",
      demo: "https://propcid.com",
    },
    {
      title: "Jharkhand IT Solutions",
      description:
        "Official company website providing IT solutions, powered by a custom Node.js backend and headless CMS.",
      image: "/jharkhand.png",
      tech: ["React", "Node.js", "Express.js", "Contentful CMS"],
      github: "https://github.com/vijay-cmtai/Jharkhand_IT_Sol_Front3",
      demo: "https://jharkhand-it-sol-front3.vercel.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      // Change 1: px-2 kar diya mobile ke liye (pahle px-4 tha) taaki width full mile
      className="py-16 md:py-24 px-2 sm:px-6 bg-slate-900 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          // Change 2: w-full lagaya hai taaki grid full width le
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              // Change 3: Mobile pe card full width feel dega
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-md border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-md">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons - Mobile pe full width buttons */}
                <div className="flex flex-row gap-3 mt-auto">
                  <Button
                    size="sm"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 h-10"
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
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 text-white border-0 h-10"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
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