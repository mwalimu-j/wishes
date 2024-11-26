import React from "react";
import Carousel from "../components/Carousel";
import TopicSection from "../components/TopicSection";
// import Footer from "../components/Footer";

const Home: React.FC = () => {
	return (
		<div className="bg-gray-100">
			{/* Hero Section with Carousel */}
			<section className="relative">
				<Carousel />
			</section>

			{/* Topic Section - Introduction to Data Structures and Algorithms */}
			<TopicSection />

			{/* Footer Section */}
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
