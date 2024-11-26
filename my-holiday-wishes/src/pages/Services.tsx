import React from 'react';

const Services = () => {
  return (
    <div>
      {/* Services Header Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">My Services</h1>
          <p className="text-lg mb-6">
            Explore the wide range of services I offer to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">What I Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services Cards */}
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 mx-auto text-blue-600 hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={service.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const servicesData = [
  {
    title: 'Web Development',
    description:
      'I build responsive, user-friendly websites to help you stand out online. From landing pages to complex web applications, I’ve got you covered.',
    iconPath: 'M19 9l-7 7-7-7',
  },
  {
    title: 'Mobile App Development',
    description:
      'I create mobile applications for both iOS and Android that are engaging and optimized for the best user experience.',
    iconPath: 'M19 9l-7 7-7-7',
  },
  {
    title: 'Digital Marketing',
    description:
      'I help businesses grow their online presence through targeted digital marketing strategies including SEO, PPC, and social media.',
    iconPath: 'M19 9l-7 7-7-7',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'I design and develop scalable e-commerce solutions that help you sell products online seamlessly, with secure payment integrations and a smooth shopping experience.',
    iconPath: 'M19 9l-7 7-7-7',
  },
  {
    title: 'Branding & Design',
    description:
      'I create memorable branding and visually appealing designs that make your business stand out and communicate your value effectively.',
    iconPath: 'M19 9l-7 7-7-7',
  },
  {
    title: 'Consulting & Strategy',
    description:
      'I provide strategic consulting services to help your business identify opportunities, optimize processes, and grow in your industry.',
    iconPath: 'M19 9l-7 7-7-7',
  },
];

export default Services;
