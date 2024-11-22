import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route for routing
import Home from "./pages/Home";
import About from "./pages/About";
import TopicPage from "./pages/TopicPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
