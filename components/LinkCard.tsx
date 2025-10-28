"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface LinkCardProps {
  href: string;
  icon: LucideIcon;
  label: string;
  username: string;
  delay?: number;
  warning?: string;
}

export default function LinkCard({
  href,
  icon: Icon,
  label,
  username,
  delay = 0,
  warning,
}: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white border border-amber-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-300">
        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center gap-4">
          {/* Icon container with animated background */}
          <motion.div
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-amber-700" />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-500">{label}</div>
            <div className="text-lg font-display font-semibold text-gray-900">
              {username}
            </div>
            {warning && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-xs text-amber-600 mt-1"
              >
                ⚠️ {warning}
              </motion.div>
            )}
          </div>

          {/* Arrow icon */}
          <motion.div
            className="text-gray-400 group-hover:text-gray-600"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 3L14 10L7 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
