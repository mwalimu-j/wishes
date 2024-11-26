import React from "react";
import { Link } from "react-router-dom";

const Templates: React.FC = () => {
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
						🎄 Holiday Wishes Templates 🎅
					</h2>
					<p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-12">
						Choose from a variety of pre-designed templates to send your loved
						ones the best wishes for the holidays. Whether it's for Christmas,
						New Year, or just to spread some festive cheer, we’ve got you
						covered!
					</p>

					{/* Template 1 */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Template Card 1 */}
						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
							<h3 className="text-xl font-bold text-center text-green-600 mb-4">
								🎅 Merry Christmas Wishes
							</h3>
							<p className="text-lg text-gray-700 mb-4">
								"Wishing you a Merry Christmas filled with joy, love, and
								blessings. May your holiday season be as special as you are!"
							</p>
							<Link
								to="/create-wish"
								className="inline-block bg-green-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-600 transition-all">
								Use This Template
							</Link>
						</div>

						{/* Template Card 2 */}
						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
							<h3 className="text-xl font-bold text-center text-red-600 mb-4">
								🎉 Happy New Year 2025!
							</h3>
							<p className="text-lg text-gray-700 mb-4">
								"As we step into the new year, I wish you a year filled with
								success, good health, and happiness. Let 2025 be your year!"
							</p>
							<Link
								to="/create-wish"
								className="inline-block bg-red-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-red-600 transition-all">
								Use This Template
							</Link>
						</div>

						{/* Template Card 3 */}
						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
							<h3 className="text-xl font-bold text-center text-blue-600 mb-4">
								✨ Holiday Cheer and Blessings
							</h3>
							<p className="text-lg text-gray-700 mb-4">
								"Wishing you a wonderful holiday season filled with peace, love,
								and prosperity. May your days be merry and bright!"
							</p>
							<Link
								to="/create-wish"
								className="inline-block bg-blue-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-600 transition-all">
								Use This Template
							</Link>
						</div>
					</div>

					{/* Additional Template Sections if needed */}
					<div className="mt-12">
						<h3 className="text-2xl font-bold text-gray-800 mb-6">
							Need More Inspiration?
						</h3>
						<p className="text-lg sm:text-xl text-gray-700">
							Explore even more templates for different occasions. Create the
							perfect message to wish your loved ones.
						</p>
						<Link
							to="/create-wish"
							className="inline-block mt-4 bg-yellow-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all">
							Create Your Own Wish
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Templates;
