"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const data = new FormData();
    const accessKey = "9b09c86c-5f11-4092-a210-dd7e2bd89416";

    // ... (बाकी logic सेम है)
    // Simulating response for UI check (Replace with real logic)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Message sent!");
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "vjzest9569@gmail.com",
      link: "mailto:vjzest9569@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 9569557844",
      link: "tel:+919569557844",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Noida, India",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, url: "https://github.com/vjzest" },
    {
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/vijay-082028290/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-4 bg-slate-900 text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm md:text-base">
            Have a project in mind? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-teal-500 text-white rounded-lg shadow-lg shrink-0">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-semibold text-base text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 text-sm truncate">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4 text-center lg:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 hover:text-white transition-all hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 text-white h-12 placeholder:text-gray-500 focus:border-teal-500/50 focus:ring-teal-500/20"
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 text-white h-12 placeholder:text-gray-500 focus:border-teal-500/50 focus:ring-teal-500/20"
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  className="bg-white/5 border-white/10 text-white resize-none placeholder:text-gray-500 focus:border-teal-500/50 focus:ring-teal-500/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 text-white font-bold text-base shadow-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </>
                )}
              </Button>

              {status && (
                <p
                  className={`text-center text-sm ${status.includes("successfully") ? "text-green-400" : "text-white"}`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}