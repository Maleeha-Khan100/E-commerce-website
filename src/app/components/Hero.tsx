import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Images */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <img
            src="/Onee.png"
            alt="Tacos"
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/twoo.png"
              alt="Fried Dish"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
            <img
              src="/threee.png"
              alt="Salad Bowl"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-green-600 text-sm font-semibold uppercase">
            About us
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Food is an important part <br /> Of a balanced Diet
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum, elit nec malesuada tincidunt, lorem turpis tincidunt nisi,
            vel faucibus augue risus non lorem.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
              Show more
            </button>
            <button className="px-6 py-3 flex items-center gap-2 border border-green-600 text-green-600 rounded-md hover:bg-green-700 hover:text-white">
              <span className="material-icons">play_arrow</span> Watch video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
