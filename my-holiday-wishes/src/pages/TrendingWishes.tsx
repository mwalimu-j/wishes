import React from "react";
import { Link } from "react-router-dom";

const TrendingWishes: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-purple-500 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            🎄 Trending Holiday Wishes 🎅
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-12">
            Explore the most popular wishes for this festive season! Choose from trending messages to spread love and joy this Christmas and New Year.
          </p>

          {/* Trending Wishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trending Wish Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-center text-green-600 mb-4">
                🎅 Merry Christmas Wishes
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                "May the joy and peace of Christmas fill your heart and home with happiness. Wishing you a very Merry Christmas!"
              </p>
              <Link
                to="/create-wish"
                className="inline-block bg-green-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
              >
                Use This Wish
              </Link>
            </div>

            {/* Trending Wish Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-center text-red-600 mb-4">
                🎉 Happy New Year 2025!
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                "As the New Year approaches, I wish you all the happiness, success, and health in the coming year. Let’s make 2025 unforgettable!"
              </p>
              <Link
                to="/create-wish"
                className="inline-block bg-red-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-red-600 transition-all"
              >
                Use This Wish
              </Link>
            </div>

            {/* Trending Wish Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-center text-yellow-600 mb-4">
                ✨ Peace and Joy for the Holidays
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                "Wishing you peace, joy, and love during this holiday season. May your days be filled with warmth and happiness!"
              </p>
              <Link
                to="/create-wish"
                className="inline-block bg-yellow-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all"
              >
                Use This Wish
              </Link>
            </div>

            {/* Trending Wish Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-center text-blue-600 mb-4">
                ✨ Holiday Blessings and Gratitude
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                "This holiday season, may your heart be filled with gratitude and your life be filled with blessings. Merry Christmas!"
              </p>
              <Link
                to="/create-wish"
                className="inline-block bg-blue-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
              >
                Use This Wish
              </Link>
            </div>

            {/* Trending Wish Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-center text-pink-600 mb-4">
                🌟 Christmas Joy and Love
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                "Sending you all my love and warm wishes for a Christmas full of joy, laughter, and unforgettable moments!"
              </p>
              <Link
                to="/create-wish"
                className="inline-block bg-pink-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-pink-600 transition-all"
              >
                Use This Wish
              </Link>
            </div>

            {/* Trending Wish Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-center text-purple-600 mb-4">
                ❄️ A Blessed New Year
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                "May the new year bring you hope, peace, and abundant blessings. Wishing you a fantastic start to 2025!"
              </p>
              <Link
                to="/create-wish"
                className="inline-block bg-purple-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-purple-600 transition-all"
              >
                Use This Wish
              </Link>
            </div>
          </div>

          {/* Call to action to create their own wish */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Want to Customize Your Own Wish?</h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-6">
              Explore more trending holiday wishes or create your own personalized message to share with loved ones.
            </p>
            <Link
              to="/create-wish"
              className="inline-block bg-yellow-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all"
            >
              Create Your Holiday Wish
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingWishes;
