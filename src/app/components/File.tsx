import Image from 'next/image';

const File = () => {
  const teamMembers = [
    {
      name: 'Mark Henry',
      role: 'Owner',
      img: '/team1.png', // Replace with actual image path
    },
    {
      name: 'Lucky Helen',
      role: 'Chef',
      img: '/team2.png', // Replace with actual image path
    },
    {
      name: 'Moon Henry',
      role: 'Founder',
      img: '/team3.png', // Replace with actual image path
    },
    {
      name: 'Tom Monrow',
      role: 'Specialist',
      img: '/team4.png', // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 bg-green-100">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Team Member</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              {/* Social Icons Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center gap-4 transition duration-300">
                <a href="#" className="text-white text-lg hover:text-green-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white text-lg hover:text-green-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white text-lg hover:text-green-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* Info */}
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default File;
