// src/components/ui/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/hero/hero-bg.jpg"; // make sure path is correct

export default function Hero() {
  return (
    <section
      className="hero-section position-relative text-center text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      ></div>

      {/* Text content */}
      <motion.div
        className="hero-text position-relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="display-5 fw-bold">Welcome to Fresh Fork</h1>
        <p className="lead">Order your favorite meals online!</p>
      </motion.div>
    </section>
  );
}
