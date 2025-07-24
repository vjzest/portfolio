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
    if (!accessKey) {
      setStatus("Configuration error: Access key is missing.");
      setIsSubmitting(false);
      return;
    }

    data.append("access_key", accessKey);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("subject", `New Contact Form Submission from ${formData.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        console.error("Error from Web3Forms:", result);
        setStatus(result.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- The rest of your component is unchanged ---
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "vjzest9569@gmail.com",
      link: "mailto:vjzest9569@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9569557844",
      link: "tel:+919569337844",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
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
    <section id="contact" className="py-24 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind? Let's talk.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-6 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="p-4 bg-gradient-to-br from-purple-600 to-teal-500 text-white rounded-lg shadow-lg">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    {info.title}
                  </h4>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 text-gray-300 rounded-lg transition-colors hover:bg-white/20 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-teal-500"
              />
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-teal-500"
              />
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows={5}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-teal-500"
              />
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:scale-105 transition-transform text-white font-bold shadow-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </div>
              {status && (
                <p
                  className={`text-center text-sm mt-4 ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}
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
