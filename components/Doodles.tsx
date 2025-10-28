"use client";

import { motion } from "framer-motion";

export function StarDoodle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ rotate: 0, scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      <motion.path
        d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.path
        d="M5 20 Q 20 10, 35 20 T 55 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <motion.path
        d="M50 15 L55 20 L50 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1.7 }}
      />
    </motion.svg>
  );
}

export function UnderlineDoodle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="120"
      height="12"
      viewBox="0 0 120 12"
      fill="none"
      className={className}
      style={{ display: "block" }}
    >
      <motion.path
        d="M2 6 Q 30 2, 60 6 T 118 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.svg>
  );
}

export function CircleDoodle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        opacity="0.3"
      />
    </motion.svg>
  );
}

export function BlobShape({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className={className}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d="M140 80 Q 160 100, 140 120 T 100 140 T 60 120 T 40 80 T 60 40 T 100 20 T 140 80"
        fill="currentColor"
        opacity="0.05"
        animate={{
          d: [
            "M140 80 Q 160 100, 140 120 T 100 140 T 60 120 T 40 80 T 60 40 T 100 20 T 140 80",
            "M145 75 Q 165 95, 145 125 T 95 145 T 55 125 T 35 75 T 55 35 T 95 15 T 145 75",
            "M140 80 Q 160 100, 140 120 T 100 140 T 60 120 T 40 80 T 60 40 T 100 20 T 140 80",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

export function AnimatedTeloText({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="260"
      height="140"
      viewBox="0 0 260 140"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Letter t - longer top bar */}
      <motion.path
        d="M25 30 Q 23 35, 23 50 L 23 85 Q 23 95, 28 98 M 8 38 L 40 38"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
      />

      {/* Letter e - fixed, not mirrored */}
      <motion.path
        d="M 60 68 L 88 68 Q 93 68, 93 63 Q 93 50, 80 48 Q 66 46, 60 58 Q 56 68, 66 80 Q 76 88, 88 82"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: "easeInOut" }}
      />

      {/* Letter l - slight curve */}
      <motion.path
        d="M 135 30 Q 133 35, 133 50 L 133 85 Q 133 95, 138 98"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.0, ease: "easeInOut" }}
      />

      {/* Letter o - more organic circle */}
      <motion.path
        d="M 198 58 Q 185 48, 175 58 Q 168 68, 175 78 Q 185 88, 198 78 Q 205 68, 198 58 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 1.4, ease: "easeInOut" }}
      />

      {/* Decorative underline flourish */}
      <motion.path
        d="M 8 108 Q 80 102, 160 105 Q 200 106, 210 108"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
      />

      {/* Decorative sparkle */}
      <motion.path
        d="M 230 55 L 232 62 L 239 64 L 232 66 L 230 73 L 228 66 L 221 64 L 228 62 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        initial={{ scale: 0, opacity: 0, rotate: -45 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 2.3, ease: "backOut" }}
      />
    </motion.svg>
  );
}
