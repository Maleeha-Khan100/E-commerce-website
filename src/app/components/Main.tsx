import React from "react";

const Main = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Food category
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Food Cards */}
      <div className="mt-10 flex items-center gap-4">
        {/* Left Arrow */}
        <button className="hidden md:flex w-10 h-10 items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700">
          <span className="material-icons">chevron_left</span>
        </button>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          {[
            { name: "Grand Italiano", items: 26, image: "/cake.png" },
            { name: "Pene Salmone", items: 23, image: "/cake.png" },
            { name: "Molto Tagliatelle", items: 20, image: "/cake.png" },
            { name: "Pepperoni Tagli", items: 26, image: "/cake.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.items} Item</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="hidden md:flex w-10 h-10 items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </section>
  );
};

export default Main;
