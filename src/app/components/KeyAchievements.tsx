'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const KeyAchievements = () => {
  const achievements = [
    { number: 5, suffix: "+", title: "Years of Existence" },
    { number: 85, suffix: "+", title: "Successful Projects Delivered" },
    { number: 50, suffix: "+", title: "Types of Technology Expertise" },
    { number: 10, suffix: "+", title: "Types of Solution Offerings" },
    { number: 200, suffix: "+", title: "Certified Resources at Disposal" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true });

    useEffect(() => {
      if (isInView) {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    }, [isInView, target]);

    return (
      <span ref={counterRef} className="text-4xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
          ref={ref}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-blue-600 mb-6"
          >
            Key Achievements
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 mb-12 max-w-4xl"
          >
            "At KClub, we're not just in the business of crafting solutions; we're the architects of innovation. 
            We sculpt cutting-edge answers that don't just drive business growth – they redefine the entire game. 
            It's not about following the norm; it's about rewriting the rulebook and transforming how organizations 
            dance with technology. Join us on this thrilling journey where every line of code and stroke of design 
            isn't just functional – it's revolutionary."
          </motion.p>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-blue-600 p-6 rounded-lg text-center text-white transform hover:scale-105 transition-transform"
              >
                <div className="text-4xl font-bold mb-2">
                  <Counter target={achievement.number} suffix={achievement.suffix} />
                </div>
                <motion.div 
                  variants={itemVariants}
                  className="text-sm"
                >
                  {achievement.title}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyAchievements; 