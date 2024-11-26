import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route for routing
import Header from "./components/Header"; // Ensure this file exists in the correct directory
import Home from "./pages/Home"; // Ensure this file exists in the correct directory
import About from "./pages/About"; // Ensure this file exists in the correct directory
import CreateWish from "./pages/CreateWish"; // New page for creating wishes
import Templates from "./pages/Tamplates"; // New page for templates
import TrendingWishes from "./pages/TrendingWishes"; // New page for trending wishes
// import HolyDayCalendar from "./pages/HolyDayCalendar"; // New page for holy day calendar
// import Contact from "./pages/Contact"; // New page for contact form
import Services from "./pages/Services"; // Import the Services page
import Footer from "./components/Footer"; // Ensure this file exists in the correct directory

const App: React.FC = () => {
	return (
		<>
			{/* Header - Navigation and Site Branding */}
			<Header />

			<main>
				<Routes>
					{/* Home Page */}
					<Route
						path="/"
						element={<Home />}
					/>

					{/* About Page */}
					<Route
						path="/about"
						element={<About />}
					/>

					{/* Create a Wish Page */}
					<Route
						path="/create-wish"
						element={<CreateWish />}
					/>

					{/* Templates Page */}
					<Route path="/templates" element={<Templates />} />

					{/* Trending Wishes Page */}
					<Route path="/trending-wishes" element={<TrendingWishes />} />

					{/* Services Page */}
					<Route path="/services" element={<Services />} />

					{/* Holy Day Calendar Page */}
					{/* <Route path="/calendar" element={<HolyDayCalendar />} /> */}

					{/* Contact Page */}
					{/* <Route path="/contact" element={<Contact />} /> */}
				</Routes>
			</main>

			{/* Footer - Contact info and social links */}
			<Footer />
		</>
	);
};

export default App;
