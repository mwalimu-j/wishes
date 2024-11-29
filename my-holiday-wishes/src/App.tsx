import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import UseWish from "./pages/UseWish"; // Updated to UseWish
import Tamplates from "./pages/Tamplates"; // Corrected typo in the import
import TrendingWishes from "./pages/TrendingWishes";
import Services from "./pages/Services";
import CreateWish from "./pages/CreateWish";
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

          {/* Use Wish Page */}
          <Route path="/use-wish" element={<UseWish />} />

          {/* Templates Page */}
          <Route path="/templates" element={<Tamplates />} />

          {/* Trending Wishes Page */}
          <Route path="/trending-wishes" element={<TrendingWishes />} />

          {/* Services Page */}
          <Route path="/services" element={<Services />} />

          {/* Create Wish Page */}
          <Route path="/create-wish" element={<CreateWish />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
