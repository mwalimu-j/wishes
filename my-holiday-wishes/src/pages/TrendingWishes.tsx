import React from "react";
import { Link } from "react-router-dom";

const TrendingWishes: React.FC = () => {
  const wishes = [
    {
      id: 1,
      title: "🎅 Merry Christmas Wishes",
      message: "May the joy and peace of Christmas fill your heart and home with happiness. Wishing you a very Merry Christmas!",
      color: "green",
    },
    {
      id: 2,
      title: "🎉 Happy New Year 2025!",
      message: "As the New Year approaches, I wish you all the happiness, success, and health in the coming year. Let’s make 2025 unforgettable!",
      color: "red",
    },
    {
      id: 3,
      title: "✨ Peace and Joy for the Holidays",
      message: "Wishing you peace, joy, and love during this holiday season. May your days be filled with warmth and happiness!",
      color: "yellow",
    },
    {
      id: 4,
      title: "✨ Holiday Blessings and Gratitude",
      message: "This holiday season, may your heart be filled with gratitude and your life be filled with blessings. Merry Christmas!",
      color: "blue",
    },
  ];

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
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h3
                  className={`text-xl font-bold text-center text-${wish.color}-600 mb-4`}
                >
                  {wish.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">{wish.message}</p>
                <Link
                  to="/use-wish"
                  state={{ wishMessage: wish.message }}
                  className={`inline-block bg-${wish.color}-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-${wish.color}-600 transition-all`}
                >
                  Use This Wish
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingWishes;
