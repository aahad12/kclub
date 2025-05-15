const CoreOfferings = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Core Offerings</h2>
        <p className="text-xl text-gray-600 mb-12">New Age Tech Delivered with Precision</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{offering.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings; 