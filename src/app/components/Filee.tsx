import React from 'react';

const Filee = () => {
  const menuItems = [
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '$32',
    },
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '$32',
    },
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '$32',
    },
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '$32',
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Food Menu</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="text-center mb-8">
        <ul className="flex justify-center space-x-6 text-gray-700">
          <li className="font-semibold text-green-600 border-b-2 border-green-600 pb-1 cursor-pointer">Breakfast</li>
          <li className="cursor-pointer hover:text-green-600">Lunch</li>
          <li className="cursor-pointer hover:text-green-600">Dinner</li>
          <li className="cursor-pointer hover:text-green-600">Dessert</li>
          <li className="cursor-pointer hover:text-green-600">Drink</li>
          <li className="cursor-pointer hover:text-green-600">Snack</li>
        </ul>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16">
        {menuItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-4">
            {/* Left Content */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">{item.calories}</p>
            </div>
            {/* Price */}
            <div className="text-green-600 font-bold text-lg">{item.price}</div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition">
          View menu
        </button>
      </div>
    </section>
  );
};

export default Filee;
