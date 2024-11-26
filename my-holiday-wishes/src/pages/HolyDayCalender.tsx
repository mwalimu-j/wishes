import React from "react";

const HolidayCalendar: React.FC = () => {
	// Sample data for the holiday calendar
	const holidays = [
		{ date: "December 25, 2024", name: "Christmas Day" },
		{ date: "December 31, 2024", name: "New Year's Eve" },
		{ date: "January 1, 2025", name: "New Year's Day" },
	];

	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">
						Holiday Calendar
					</h2>
					<p className="text-lg text-gray-700 mb-10">
						Stay updated with the key dates of the holiday season! Here's a list
						of upcoming celebrations and holidays to mark on your calendar.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{holidays.map((holiday, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg p-6 text-center">
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								{holiday.name}
							</h3>
							<p className="text-gray-600 text-lg">{holiday.date}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HolidayCalendar;
