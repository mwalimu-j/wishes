import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route for routing
import Home from "./pages/Home"; // Ensure this file exists in the correct directory
import About from "./pages/About"; // Ensure this file exists in the correct directory
import TopicPage from "./pages/Topicpage"; // Ensure this file exists in the correct directory
import Header from "./components/Header"; // Ensure this file exists in the correct directory
import Footer from "./components/Footer"; // Ensure this file exists in the correct directory

const App: React.FC = () => {
  return (
    <>
      {/* Header - Navigation and Site Branding */}
      <Header />

      <main>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Topic Page for Data Structures and Algorithms */}
          <Route path="/topic" element={<TopicPage />} />
        </Routes>
      </main>

      {/* Footer - Contact info and social links */}
      <Footer />
    </>
  );
};

export default App;
