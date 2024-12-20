import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import festiveImage from "../assets/image11.png"; // Update path to your image

const UseWish: React.FC = () => {
  const location = useLocation();
  const { wishMessage = "" } = location.state || {};

  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold"); // Make the font bold

    // Add festive background image
    const image = new Image();
    image.src = festiveImage;
    image.onload = () => {
      doc.addImage(image, "PNG", 10, 10, 180, 180); // Adjust dimensions as needed
      doc.setTextColor(255, 255, 255); // Set text color to white
      doc.setFontSize(22);
      doc.text("Merry Christmas", 50, 90); // Place "Merry Christmas" text at the center

      // Add recipient and sender text
      doc.setFont("helvetica", "bold"); // Set font to bold for both
      doc.setTextColor(255, 255, 255); // Set text color to white
      doc.text(`To: ${recipient}`, 10, 120); // Left side (recipient name)
      doc.text(`From: ${sender}`, 130, 120); // Right side (sender name)

      // Add the wish message
      doc.setFontSize(16);
      doc.text(wishMessage, 10, 140, { maxWidth: 180 });

      // Save the document
      doc.save("HolidayWishCard.pdf");
    };
  };

  return (
    <section className="bg-gradient-to-r from-teal-400 to-indigo-500 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6 py-0">
          Customize Your Wish Card
        </h2>
        <div className="mb-4">
          <label className="block text-lg font-bold text-white mb-2">
            Recipient's Name
          </label>
          <input
            type="text"
            placeholder="Enter recipient's name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-white bg-gray-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold text-white mb-2">
            Sender's Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-white bg-gray-800"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-white mb-2">Your Wish:</h3>
          <p className="text-white">{wishMessage}</p>
        </div>
        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:bg-gradient-to-l transition-all"
        >
          Download Wish Card
        </button>
      </div>
    </section>
  );
};

export default UseWish;
