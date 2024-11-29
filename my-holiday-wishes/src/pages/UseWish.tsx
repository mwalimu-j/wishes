import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";

const UseWish: React.FC = () => {
  const location = useLocation();
  const { wishMessage = "" } = location.state || {};

  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Holiday Wish Card", 10, 10);
    doc.text(`To: ${recipient}`, 10, 30);
    doc.text(wishMessage, 10, 50);
    doc.text(`From: ${sender}`, 10, 90);
    doc.save("HolidayWishCard.pdf");
  };

  return (
    <section className="bg-gradient-to-r from-teal-400 to-indigo-500 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Customize Your Wish Card
        </h2>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Recipient's Name
          </label>
          <input
            type="text"
            placeholder="Enter recipient's name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Sender's Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Your Wish:</h3>
          <p className="text-gray-700">{wishMessage}</p>
        </div>
        <button
          onClick={handleDownload}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-all"
        >
          Download Wish Card
        </button>
      </div>
    </section>
  );
};

export default UseWish;
