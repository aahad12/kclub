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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">Our Core Belief</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => (
            <div key={index} className="bg-blue-600 rounded-lg p-8 text-white">
              <div className="text-4xl mb-4">{belief.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{belief.title}</h3>
              <p className="text-white/90">{belief.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBeliefs; 