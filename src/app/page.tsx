import Image from 'next/image';
import Navbar from './components/Navbar';
import KeyAchievements from './components/KeyAchievements';
import CoreBeliefs from './components/CoreBeliefs';
import CoreOfferings from './components/CoreOfferings';
import ExecutionMethodology from './components/ExecutionMethodology';
import RichExpertise from './components/RichExpertise';
import CoreOfferingCards from './components/CoreOfferingCards';
import Footer from './components/Footer';

export default function Home() {
  const emergingTechOfferings = {
    title: "Core Offerings",
    subtitle: "Emerging Technologies",
    offerings: [
      {
        number: "1",
        title: "Fintech, Payment Solutions & DeFi",
        description: ["Payment Solutions - P2P, Gateways, Wallets, FAST/Crypto", "Lending/Borrowing Platform", "Accounting/Reconciliation", "Engine/Financial Risk Tool"]
      },
      {
        number: "2",
        title: "Blockchain, Crypto & Web3 Tech",
        description: ["NFT/Asset Tokenization", "Crypto mining & Events", "Decentralized/San-box", "Onboarding/AR/VR Solutions"]
      },
      {
        number: "3",
        title: "AI, Big Data, BI & Cloud",
        description: ["AI/ML development, Cognitive", "AI Generative/Predictive AI", "Cloud(AWS/GCP)", "BI, Analytics Tools"]
      },
      {
        number: "4",
        title: "Smart Automation IOT, RPA & OCR",
        description: ["Workflow & Robotic Process", "Automation/Optical Character", "Recognition/Smart Homes", "Hyper Automation Tools"]
      }
    ],
    imageSrc: "https://images.pexels.com/photos/17136615/pexels-photo-17136615/free-photo-of-a-computer-and-modern-devices-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  };

  const enterpriseOfferings = {
    title: "Core Offerings",
    subtitle: "Enterprise Solutions",
    offerings: [
      {
        number: "1",
        title: "Digital Transformation",
        description: ["Data Migration Strategy", "Multi-Entity Transitions", "Implementation of Paperless", "System"]
      },
      {
        number: "2",
        title: "System Integrations",
        description: ["Enterprise Systems & Legacy", "Migrations/Implementation of", "middleware solutions/Database", "Integrations"]
      },
      {
        number: "3",
        title: "Enterprise Implementations",
        description: ["Development of Enterprise-grade", "software/Custom integrations of", "FreelanceX, SugarCRM etc"]
      },
      {
        number: "4",
        title: "Industry Specific Solutions",
        description: ["Supply Chain Solutions", "Order Management Systems", "Warehouse & Inventory", "Management/Banking Solutions"]
      }
    ],
    imageSrc: "https://images.pexels.com/photos/13260079/pexels-photo-13260079.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section with Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:h-[calc(100vh-4rem)] xl:h-[calc(100vh-4rem)]">
          <Image
            src="/hero.jpeg"
            alt="KCLUB Tech Transformation"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            quality={100}
          />
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
        </div>

        {/* Original Hero Section (Commented) */}
        {/* <div className="relative h-screen flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute transform -rotate-45 bg-blue-600/10 w-[200%] h-[100%] top-[-50%] right-[-50%]"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                PIONEERING THE FUTURE OF
                <span className="text-blue-600 block">TECH TRANSFORMATION, TODAY</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Transforming businesses through innovative technology solutions
              </p>
              
              <div className="flex flex-wrap gap-4 text-lg font-semibold">
                <span className="text-blue-600">INDIA</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-600">UAE</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-600">USA</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-600">SINGAPORE</span>
              </div>
            </div>
          </div>
        </div> */}

        <KeyAchievements />
        <CoreBeliefs />
        <ExecutionMethodology />
        <CoreOfferings />

        {/* New Sections */}
        <RichExpertise />
        <CoreOfferingCards {...emergingTechOfferings} />
        <div className="bg-gray-50">
          <CoreOfferingCards {...enterpriseOfferings} />
        </div>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
                <p className="text-gray-600">Modernizing businesses for the digital age</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Tech Consulting</h3>
                <p className="text-gray-600">Expert guidance for your tech journey</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Innovation Labs</h3>
                <p className="text-gray-600">Creating tomorrow's solutions today</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 