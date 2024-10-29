import React from 'react';
import Dash from './Dash';

const ServicesData = [
  {
    img: "/pro-logo.png",
    title: "Professional Kitchen",
    desc: "Our professional kitchen service offers state-of-the-art equipment and highly skilled chefs to ensure top-notch meal preparation and service for any occasion."
  },
  {
    img: "/delivery.jpg",
    title: "Delivery",
    desc: "Experience fast and reliable delivery right to your doorstep. Our dedicated team ensures that your food arrives fresh and on time, so you can enjoy your meal without any hassle."
  },
  {
    img: "/wine.jpg",
    title: "Wine List",
    desc: "Explore our curated selection of fine wines, each chosen to complement your meal perfectly. From robust reds to crisp whites, our wine list offers something for every palate."
  },
  {
    img: "/free.png",
    title: "Free Wi-Fi",
    desc: "Stay connected with complimentary high-speed Wi-Fi throughout your visit. Stream, browse, and work without interruptions—all for free!"
  }
];

const Services = () => {
  return (
    <div className='container pt-40'>
      <div className='space-y-4 w-fit mx-auto text-center'>
        <h2 className='text-4xl md:text-6xl font-bold'>Choose the Best
          <span className='text-accent'> Services</span>
        </h2>
        <p className='text-gray-700'>
          Let us take care of your next event with our full-service catering. From intimate gatherings to grand celebrations, our chefs create delicious menus tailored to your tastes.
          <br />
          Guiding you with exceptional culinary experiences!
        </p>
        
        <Dash />

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8'>
          {ServicesData.map((service, index) => (
            <div key={index} className='p-6 border rounded-lg shadow-md hover:shadow-lg transition'>
              <img src={service.img} alt={service.title} className='w-full h-48 object-cover rounded-md mb-4' />
              <h3 className='font-medium text-xl'>{service.title}</h3>
              <p className='text-gray-700'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
