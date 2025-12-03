// src/app/components/Footer.tsx
"use client";

import { Heart, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.823a1.375 1.375 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l2.607-2.607c.801-.801 2.094-.801 2.895 0 .799.801.798 2.102 0 2.899l-4.102 4.102c-.8.8-2.096.8-2.896 0l-1.928-1.928a1.375 1.375 0 0 0-1.942 0L.438 15.082a1.373 1.373 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l1.928-1.928c2.479-2.479 6.502-2.479 8.981 0 2.477 2.477 2.477 6.495 0 8.976l-4.102 4.102c-2.477 2.477-6.495 2.477-8.976 0L.438 28.386a1.373 1.373 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l2.607-2.607c3.278-3.278 8.594-3.278 11.872 0 3.276 3.276 3.276 8.586 0 11.864l-5.385 5.385a1.375 1.375 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l5.385-5.385c4.348-4.348 4.348-11.4 0-15.748-4.348-4.348-11.4-4.348-15.748 0L3.102 30.685a1.375 1.375 0 0 0 0-1.941L4.272 27.574a1.375 1.375 0 0 0 1.942 0L9.821 23.967c3.278-3.278 3.278-8.594 0-11.872-3.276-3.276-8.586-3.276-11.864 0L1.442 15.61a1.375 1.375 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l3.515-3.515c1.652-1.652 4.336-1.652 5.988 0 1.651 1.651 1.651 4.33 0 5.981L9.955 25.29c-1.652 1.652-4.336 1.652-5.988 0l-1.17-1.17a1.375 1.375 0 0 0-1.942 0L.438 24.537a1.373 1.373 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l2.607-2.607c1.376-1.376 3.606-1.376 4.982 0 1.374 1.374 1.374 3.6 0 4.975l-4.102 4.102c-1.376 1.376-3.606 1.376-4.982 0L.438 31.502a1.373 1.373 0 0 0 0 1.941l1.17 1.17a1.375 1.375 0 0 0 1.942 0l1.928-1.928c2.479-2.479 6.502-2.479 8.981 0 2.477 2.477 2.477 6.495 0 8.976l-4.102 4.102c-2.477 2.477-6.495 2.477-8.976 0L13.483 0z" />
  </svg>
);

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
    // Added LeetCode Profile
    {
      icon: <LeetCodeIcon className="h-5 w-5" />,
      url: "https://leetcode.com/u/vjzest9569/", // Maine github ke username se match karke URL daal diya hai. Agar alag hai to change kar lena.
      name: "LeetCode",
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