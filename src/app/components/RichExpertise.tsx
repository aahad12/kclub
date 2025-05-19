'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const RichExpertise = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.9, 0.4]);

  const industries = [
    { title: 'CPG/FMCG', icon: '🏢' },
    { title: 'BFSI/Fintech', icon: '🏛️' },
    { title: 'Retail', icon: '🏪' },
    { title: 'Telecom', icon: '📡' },
    { title: 'Manufacturing', icon: '🏭' },
    { title: 'Logistics & SCM', icon: '🚚' },
    { title: 'Oil & Gas', icon: '⛽' },
    { title: 'Food & Beverage', icon: '🍽️' }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          opacity,
          backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.85)"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-center mb-12 bg-black/30 p-6 rounded-lg"
        >
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <div className="bg-black/80 p-2 rounded mr-3">
              <span className="text-blue-600 font-bold text-2xl">K</span>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">Rich Expertise</h2>
            <p className="text-xl text-white/90 mt-2">With Multiple Industries Covered</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{industry.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RichExpertise; 