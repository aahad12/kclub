'use client';

import { motion } from 'framer-motion';

const ExecutionMethodology = () => {
  const steps = [
    {
      title: "DISCUSS",
      description: "Discuss with the SPOCs to understand the core problems and challenges that needs to be addressed"
    },
    {
      title: "DESIGN",
      description: "Design the robust tech architecture to provide a holistic solution that effectively addresses the problems and challenges"
    },
    {
      title: "DEVELOP",
      description: "Develop the complete tech solution, systems and processes, following the best PMP practices like agile, scrum and lean frameworks"
    },
    {
      title: "DELIVER",
      description: "Deliver the perfect and promising solution built on emerging and advanced tech to the clients"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-blue-600 mb-4"
          >
            Our 4D Execution Methodology
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12"
          >
            is What Makes us Excel in Every Project
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-blue-600 rounded-lg p-6 text-white transform hover:scale-105 transition-transform"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-4"
              >
                {step.title}
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-white/90"
              >
                {step.description}
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-4 text-3xl font-bold"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutionMethodology; 