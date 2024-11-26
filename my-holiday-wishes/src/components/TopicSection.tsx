import React from "react";
import { Link } from "react-router-dom";

const TopicSection: React.FC = () => {
	return (
		<section className="bg-gradient-to-r from-green-400 to-red-400 py-16">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center text-white">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						🎄 Merry Christmas & Happy New Year 2025! 🎅
					</h2>
					<p className="text-lg sm:text-xl lg:text-2xl mb-6">
						As we celebrate this festive season, I want to wish all of you a
						<span className="font-semibold"> Merry Christmas </span> and a
						joyful
						<span className="font-semibold"> Happy New Year 2025! </span> May
						your holidays be filled with love, warmth, and peace.
					</p>
					<p className="text-lg sm:text-xl lg:text-2xl mb-6">
						To everyone who knows me, and those who don't, I send my heartfelt
						wishes for a joyous Christmas and a prosperous New Year. As we move
						into 2025, may God’s blessings shine on you and bring peace to your
						heart.
					</p>

					{/* Image or decoration for a festive touch */}
					<div className="my-8">
						<img
							src="https://via.placeholder.com/400x200.png?text=Holiday+Flowers"
							alt="Holiday Flowers"
							className="mx-auto rounded-lg shadow-lg"
						/>
					</div>

					{/* Link/Button to a page with more wishes or holiday-related content */}
					<Link
						to="/create-wish"
						className="inline-block bg-yellow-500 text-white text-lg sm:text-xl font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all">
						Create Your Holiday Wish
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TopicSection;
