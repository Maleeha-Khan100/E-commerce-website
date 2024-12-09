import React from "react";

const Center = () => {
  const partners = [
    { id: 1, name: "Restaurant", logo: "/image 2.png" },
    { id: 2, name: "Bakery", logo: "/image 60.png" },
    { id: 3, name: "Fork & Spoon", logo: "/image 56.png" },
    { id: 4, name: "Wolf Coffee", logo: "/image 58.png" },
    { id: 5, name: "Bistro", logo: "/image 57.png" },
    { id: 6, name: "Bakery Slogan Here", logo: "/image 59.png" },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-green-600 uppercase">
          Partners & Clients
        </h2>
        <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          We work with the best people
        </h3>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex justify-center items-center bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
