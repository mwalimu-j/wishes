import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <hr></hr>
            <p className="text-sm">
              WhatsApp:{" "}
              <a href="tel:+254700598317" className="hover:text-blue-500">
                0700598317
              </a>
            </p>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:smwajo2212@ueab.ac.ke" className="hover:text-blue-500">
                smwajo2212@ueab.ac.ke
              </a>
            </p>
          </div>

          {/* Important Links Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Important Links</h3>
            <hr></hr>

            <Link to="/" className="text-sm hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-sm hover:text-blue-500">
              About
            </Link>
            <Link to="/topic" className="text-sm hover:text-blue-500">
              Topic
            </Link>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <hr></hr>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-xl hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a
                href="https://twitter.com"
                className="text-xl hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-xl hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-600 mt-8"></div>

        {/* Holiday Wishes */}
        <div className="text-center text-sm mt-4">
          <p>🎄 Wishing you a Merry Christmas & a Happy New Year 2025! 🎆</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
