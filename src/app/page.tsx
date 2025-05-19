'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import KeyAchievements from './components/KeyAchievements';
import CoreBeliefs from './components/CoreBeliefs';
import CoreOfferings from './components/CoreOfferings';
import ExecutionMethodology from './components/ExecutionMethodology';
import RichExpertise from './components/RichExpertise';
import CoreOfferingCards from './components/CoreOfferingCards';
import Footer from './components/Footer';
import ParallaxHero from './components/ParallaxHero';
import AnimatedSection from './components/AnimatedSection';
import ServicesSection from './components/ServicesSection';

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
        <ParallaxHero />

        <AnimatedSection>
          <KeyAchievements />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <CoreBeliefs />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <ExecutionMethodology />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <CoreOfferings />
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <RichExpertise />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <CoreOfferingCards {...emergingTechOfferings} />
        </AnimatedSection>

        <div className="bg-gray-50">
          <AnimatedSection delay={0.7}>
            <CoreOfferingCards {...enterpriseOfferings} />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.8}>
          <ServicesSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
} 