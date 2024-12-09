import Image from 'next/image';

const Heroo = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6 lg:px-16 py-12">
      {/* Left images */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div className="relative w-full h-64 lg:h-80">
          <Image
            src="/oo.png" // Make sure this file exists in the 'public' folder
            alt="Chopping vegetables"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-64 lg:h-80">
          <Image
            src="/tt.png" // Make sure this file exists in the 'public' folder
            alt="Delicious salad"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Why We are the best?
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Ut ac, 
          ultrices mattis sed vulputate. Mauris risus elit, ac et dapibus sit eu velit in consequat.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Feature items */}
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-full">
              <Image
                src="/Truck.png" // Ensure this file exists in the 'public' folder
                alt="Fast Delivery"
                width={40}
                height={40}
              />
            </div>
            <span className="text-gray-800 font-medium">Fast Delivery</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-full">
              <Image
                src="/Timer.png" // Ensure this file exists in the 'public' folder
                alt="24/7 Services"
                width={40}
                height={40}
              />
            </div>
            <span className="text-gray-800 font-medium">24/7 Services</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-full">
              <Image
                src="/Hamburger (1).png" // Ensure this file exists in the 'public' folder
                alt="Fresh Food"
                width={40}
                height={40}
              />
            </div>
            <span className="text-gray-800 font-medium">Fresh Food</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-full">
              <Image
                src="/Factory.png" // Ensure this file exists in the 'public' folder
                alt="Quality Maintain"
                width={40}
                height={40}
              />
            </div>
            <span className="text-gray-800 font-medium">Quality Maintain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroo;
