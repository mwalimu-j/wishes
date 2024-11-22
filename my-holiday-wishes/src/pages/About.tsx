import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to the Holiday Wishes website! This is a place to share and celebrate the joy of Christmas and the new year. 
            Our goal is to spread happiness, inspire learning, and make this holiday season a memorable one for all.
          </p>

          <div className="text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
            <p className="text-lg text-gray-700 mb-4">
              On this website, we focus on learning and celebrating with two main themes: the importance of Data Structures and Algorithms 
              and sharing the joy of the holiday season. You’ll find resources, tutorials, and fun ways to make this Christmas and New Year special.
            </p>
            <p className="text-lg text-gray-700">
              Whether you are here to learn something new or enjoy festive content, we hope you have a fantastic time browsing through 
              our website. Cheers to a wonderful holiday season and a bright year ahead!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
