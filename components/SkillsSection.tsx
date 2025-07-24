// src/app/components/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Code, Wrench, Server } from "lucide-react";
// FIX: Changed path
import { staggerContainer, cardVariant, titleVariant } from "../lib/animations";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8" />,
      skills: [
        { name: "Node.js & Express", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL & Prisma", level: 75 },
        { name: "REST & GraphQL", level: 85 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-8 w-8" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS (S3, EC2)", level: 70 },
        { name: "Vercel", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariant}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:!rotate-0"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg mr-4 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-teal-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-teal-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          type: "spring",
                          bounce: 0.3,
                        }}
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
