"use client";

import { motion } from "framer-motion";
import { Github, Mail, Instagram, MessageCircle, Linkedin } from "lucide-react";
import LinkCard from "@/components/LinkCard";
import {
  StarDoodle,
  ArrowDoodle,
  UnderlineDoodle,
  CircleDoodle,
  BlobShape,
  AnimatedTeloText,
} from "@/components/Doodles";

export default function Home() {
  const contacts = [
    {
      href: "https://github.com/telomelonia",
      icon: Github,
      label: "GitHub",
      username: "telomelonia",
      delay: 0.1,
    },
    {
      href: "https://instagram.com/simply.telo",
      icon: Instagram,
      label: "Instagram",
      username: "simply.telo",
      delay: 0.2,
    },
    {
      href: "https://discord.com/users/telomelonia",
      icon: MessageCircle,
      label: "Discord",
      username: "telomelonia",
      delay: 0.3,
    },
    {
      href: "https://www.linkedin.com/in/telomelonia",
      icon: Linkedin,
      label: "LinkedIn",
      username: "telomelonia",
      delay: 0.4,
      warning: "Not very active here",
    },
    {
      href: "mailto:shuklas2002@gmail.com",
      icon: Mail,
      label: "Email",
      username: "shuklas2002@gmail.com",
      delay: 0.5,
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Blob shapes */}
        <div className="absolute top-10 -left-10 text-yellow-200">
          <BlobShape />
        </div>
        <div className="absolute top-1/3 -right-20 text-orange-200">
          <BlobShape />
        </div>
        <div className="absolute bottom-20 left-1/4 text-amber-200">
          <BlobShape />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 text-yellow-300">
          <CircleDoodle />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        {/* Header section */}
        <div className="text-center mb-12">
          {/* Decorative star */}
          <div className="flex justify-center mb-6">
            <div className="text-amber-500">
              <StarDoodle />
            </div>
          </div>

          {/* Animated handwritten name */}
          <div className="flex justify-center items-center">
            <div className="text-gray-900 scale-110 sm:scale-125">
              <AnimatedTeloText />
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            Let&apos;s connect! 👋
          </motion.p>

          {/* Decorative arrow pointing down */}
          <motion.div
            className="mt-8 flex justify-center text-amber-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <ArrowDoodle />
          </motion.div>
        </div>

        {/* Contact links */}
        <div className="space-y-4 mb-12">
          {contacts.map((contact, index) => (
            <LinkCard
              key={contact.label}
              href={contact.href}
              icon={contact.icon}
              label={contact.label}
              username={contact.username}
              delay={contact.delay}
              warning={contact.warning}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Scan from my NFC ring 💍</p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="fixed bottom-10 right-10 text-orange-400 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <StarDoodle />
      </motion.div>
    </main>
  );
}
