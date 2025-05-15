interface OfferingCard {
  number: string;
  title: string;
  description: string[];
}

interface CoreOfferingCardsProps {
  title: string;
  subtitle: string;
  offerings: OfferingCard[];
  imageSrc: string;
}

const CoreOfferingCards = ({ title, subtitle, offerings, imageSrc }: CoreOfferingCardsProps) => {
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
            <h2 className="text-4xl font-bold text-blue-600">{title}</h2>
            <p className="text-xl text-gray-600 mt-2">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl font-bold text-blue-600">{offering.number}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{offering.title}</h3>
                </div>
                <div className="space-y-2">
                  {offering.description.map((desc, i) => (
                    <p key={i} className="text-sm text-gray-600">{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingCards; 