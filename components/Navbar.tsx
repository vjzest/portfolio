// src/app/components/Navbar.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <Briefcase className="h-4 w-4" />,
    },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
          return;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const mobileMenuContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ENHANCED LOGO WITH ANIMATIONS */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur-md opacity-0 group-hover:opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Image
                src="/p1.png"
                alt="Portfolio Logo"
                width={200}
                height={100}
                priority
                className="rounded-lg relative z-10 group-hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          </motion.div>

          {/* DESKTOP NAVIGATION WITH ENHANCED ANIMATIONS */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 relative group ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-nav-item"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Icon with hover animation */}
                  <motion.span
                    className="relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.span>

                  <span className="relative z-10">{item.label}</span>

                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active indicator dot */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -top-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  {isOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div key={item.id} variants={mobileMenuItemVariants}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start px-4 py-3 text-base ${
                      activeSection === item.id
                        ? "text-white bg-white/10"
                        : "text-gray-300"
                    }`}
                  >
                    <span className="w-6">{item.icon}</span>
                    <span className="ml-3">{item.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
