import React from "react";

const End = () => {
  const socialIcons = [
    { id: 1, name: "Pinterest", icon: "/" },
    { id: 2, name: "Twitter", icon: "/icons/twitter.svg" },
    { id: 3, name: "Facebook", icon: "/icons/facebook.svg" },
    { id: 4, name: "Instagram", icon: "/icons/instagram.svg" },
    { id: 5, name: "YouTube", icon: "/icons/youtube.svg" },
  ];

  const quickLinks = ["About us", "Contact Us", "Our Menu", "Team", "FAQ"];

  const instagramGallery = [
    "/food1.png",
    "/food2.png",
    "/food3.png",
    "/food3.png",
    "/food4.png",
    "/food5.png",
  ];

  return (
    <footer className="bg-green-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand / Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-green-800">Foodtuck</h3>
          <p className="mt-2 text-gray-600">
            Subscribe to our newsletter and get a 25% discount!
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
            >
              &#x27A4;
            </button>
          </form>
          <div className="mt-4 flex space-x-4">
            {socialIcons.map((icon) => (
              <a key={icon.id} href="#" className="text-gray-500 hover:text-green-600">
                <img src={icon.icon} alt={icon.name} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-green-800">Contact us</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              📍 Kolkata, India, 3rd Floor, Office 45
            </li>
            <li>📞 00965 - 96659986</li>
            <li>✉️ M.Alyaqout@4house.Co</li>
            <li>🕒 Sun - Sat / 10:00 AM - 8:00 PM</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-green-800">Links</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-green-600">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h3 className="text-xl font-bold text-green-800">Instagram Gallery</h3>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {instagramGallery.map((image, index) => (
              <a key={index} href="#" className="block">
                <img
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default End;
