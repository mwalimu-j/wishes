import React from "react";
import { Link } from "react-router-dom";

const TopicSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Learn Data Structures and Algorithms</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dive into the world of Data Structures and Algorithms to understand the fundamental building blocks of computer science.
            Whether you're preparing for coding interviews or enhancing your technical skills, this topic will help you gain the
            knowledge needed to solve complex problems efficiently.
          </p>
          
          {/* Link/Button to more content or related page */}
          <Link
            to="/topic"
            className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
