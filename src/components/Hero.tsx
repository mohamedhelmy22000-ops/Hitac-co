import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  backgroundImage
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gradient"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <a
            href={ctaLink}
            className="btn btn-primary btn-lg group"
          >
            {ctaText}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#services"
            className="btn btn-outline btn-lg"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-neutral-200"
          variants={itemVariants}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
            <p className="text-neutral-600 mt-2">Projects Delivered</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gradient">150+</div>
            <p className="text-neutral-600 mt-2">Enterprise Clients</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gradient">98%</div>
            <p className="text-neutral-600 mt-2">Success Rate</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
