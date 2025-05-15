const RichExpertise = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <div className="bg-black p-2 rounded mr-3">
              <span className="text-blue-600 font-bold text-2xl">K</span>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">Rich Expertise</h2>
            <p className="text-xl text-gray-600 mt-2">With Multiple Industries Covered</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{industry.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RichExpertise; 