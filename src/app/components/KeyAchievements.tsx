const KeyAchievements = () => {
  const achievements = [
    { number: "5+", title: "Years of Existence" },
    { number: "85+", title: "Successful Projects Delivered" },
    { number: "50+", title: "Types of Technology Expertise" },
    { number: "10+", title: "Types of Solution Offerings" },
    { number: "200+", title: "Certified Resources at Disposal" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Key Achievements</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          "At KClub, we're not just in the business of crafting solutions; we're the architects of innovation. 
          We sculpt cutting-edge answers that don't just drive business growth – they redefine the entire game. 
          It's not about following the norm; it's about rewriting the rulebook and transforming how organizations 
          dance with technology. Join us on this thrilling journey where every line of code and stroke of design 
          isn't just functional – it's revolutionary."
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-blue-600 p-6 rounded-lg text-center text-white">
              <div className="text-4xl font-bold mb-2">{achievement.number}</div>
              <div className="text-sm">{achievement.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements; 