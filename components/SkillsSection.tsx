"use client";

import { motion } from "framer-motion";
import { Code, Wrench, Server } from "lucide-react";
// Animation placeholder for simplicity - you can keep your imports
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js & Express", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL & Prisma", level: 75 },
        { name: "REST & GraphQL", level: 85 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS (S3, EC2)", level: 70 },
        { name: "Vercel", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-15 -[px-10] bg-slate-900 text-white"
    >
      <div className="container mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariant}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-2.5 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg mr-4 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-teal-400 text-xs font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-teal-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
