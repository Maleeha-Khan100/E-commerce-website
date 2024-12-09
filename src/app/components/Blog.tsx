import React from "react";

const Blog= () => {
  const blogPosts = [
    {
      id: 1,
      date: "02 Jan 2022",
      comments: 3,
      title: "Chocolate Truffle Cake With Honey Flavor",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam ac id ut ultricies neque. Tempus, potenti diam ac integer id tellus est.",
      image: "/ckao.png", // Replace with actual image URL
    },
    {
      id: 2,
      date: "02 Jan 2022",
      comments: 3,
      title: "Chocolate Truffle Cake With Honey Flavor",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam ac id ut ultricies neque. Tempus, potenti diam ac integer id tellus est.",
      image: "/ckao.png", // Replace with actual image URL
    },
    {
      id: 3,
      date: "02 Jan 2022",
      comments: 3,
      title: "Chocolate Truffle Cake With Honey Flavor",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam ac id ut ultricies neque. Tempus, potenti diam ac integer id tellus est.",
      image: "/ckao.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest News & Blog
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra neque massa congue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 4h10M5 8h14l1 13H4L5 8z"
                      />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 16h10M7 12h7"
                      />
                    </svg>
                    Comments ({post.comments})
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="mt-4 block text-green-500 hover:underline text-sm font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
