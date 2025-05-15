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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our 4D Execution Methodology</h2>
        <p className="text-xl text-gray-600 mb-12">is What Makes us Excel in Every Project</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-blue-600 rounded-lg p-6 text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/90">{step.description}</p>
              <div className="mt-4 text-3xl font-bold">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionMethodology; 