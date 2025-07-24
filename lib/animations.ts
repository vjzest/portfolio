// src/lib/animations.ts

import { Variants } from "framer-motion";

/**
 * A reusable container variant for staggering the animation of its children.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * An "eccentric" fade-in animation with a slight rotation and spring physics.
 * Perfect for text blocks, cards, and individual elements.
 */
export const eccentricFadeIn: Variants = {
  hidden: { opacity: 0, y: 20, rotate: -5, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

/**
 * A simple fade-in from the bottom for section titles.
 */
export const titleVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/**
 * A variant for cards that includes a slight rotation on enter.
 */
export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotate: 3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

/**
 * A variant for elements sliding in from the left.
 */
export const leftSlideVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

/**
 * A variant for elements sliding in from the right.
 */
export const rightSlideVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};
