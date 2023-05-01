import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 bg-gradient-to-br from-brown to-transparent w-16 h-16 rounded-full">
      <MotionLink
        href="/"
        className="text bg-dark text-2xl"
        whileHover={{
          scale: 1.5,
          transition: { duration: 1 },
        }}
      >
        CS
      </MotionLink>
    </div>
  );
};

export default Logo;
