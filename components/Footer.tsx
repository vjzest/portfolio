// src/app/components/Footer.tsx
"use client";

import { Heart, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/vjzest",
      name: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/vijay-082028290/",
      name: "LinkedIn",
    },
  ];

  return (
    <motion.footer
      className="bg-slate-900 border-t border-white/10 text-white py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-300">
              © {currentYear} Vijay Maurya. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </div> */}
      </div>
    </motion.footer>
  );
}
