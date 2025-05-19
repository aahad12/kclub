'use client';

import { motion } from 'framer-motion';

const CoreBeliefs = () => {
  const beliefs = [
    {
      title: "PEOPLE",
      description: "Industry experts with years of experience End to End support in Design, Development and Deployment of tech",
      icon: "👥"
    },
    {
      title: "PROCESS",
      description: "Process Designed by Industry experts bringing Efficiency and Speed Scalable Process accommodating client's evolving needs",
      icon: "⚙️"
    },
    {
      title: "TECHNOLOGY",
      description: "Unparallel tech proficiency, achieving tech optimization, resource allocation, and automation Leading to cost reductions",
      icon: "💻"
    }
  ];

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-600 mb-12"
        >
          Our Core Belief
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-blue-600 rounded-lg p-8 text-white transform hover:scale-105 transition-transform"
            >
              <motion.div 
                variants={itemVariants}
                className="text-4xl mb-4"
              >
                {belief.icon}
              </motion.div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-4"
              >
                {belief.title}
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-white/90"
              >
                {belief.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreBeliefs; 