'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CoreOfferings = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  const offerings = [
    {
      title: "Enterprise Solution",
      description: "From robust ERP systems to intricate CRM platforms, we meticulously design and deploy enterprise-grade solutions that fuel growth, enhance efficiency, and drive innovation.",
      icon: "🏢"
    },
    {
      title: "Retail & eCommerce",
      description: "From cutting-edge e-commerce platforms to innovative retail tech solutions, we pave the way for your business to thrive in the digital marketplace.",
      icon: "🛍️"
    },
    {
      title: "Emerging Tech.",
      description: "We lead the charge in harnessing the power of emerging technologies to drive innovation and elevate your business to new heights.",
      icon: "🚀"
    },
    {
      title: "Nextgen AI Solutions",
      description: "Reactive or narrow AI is now in the past, make way to the general and super intelligent AI models with KCLUB's AI domain expertise.",
      icon: "🤖"
    },
    {
      title: "Resource Augmentation",
      description: "Our dynamic IT professionals become an extension of your team, ensuring accelerated project delivery and unmatched expertise.",
      icon: "👥"
    },
    {
      title: "Penetration Testing",
      description: "Our penetration testing services help organizations identify vulnerabilities in their systems and infrastructure before they can be exploited by cybercriminals.",
      icon: "🔒"
    },
    {
      title: "AI Powered Marketing",
      description: "From strategic campaigns to compelling content, we craft a tailored marketing journey that propels your tech solutions into the spotlight.",
      icon: "📈"
    },
    {
      title: "Lending Management",
      description: "We have built a lending management tech which can help fintech and BFSI/NBFC companies provide best lending experience for their customers.",
      icon: "💰"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          opacity,
          backgroundImage: "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
          className="bg-black/30 p-6 rounded-lg inline-block"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Offerings</h2>
          <p className="text-xl text-white/90">New Age Tech Delivered with Precision</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{offering.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings; 