import React from 'react';

const Footer = () => {
  return (
    <div className='container pt-40'>
      <div className='grid md:grid-cols-3 gap-16'>
        <div className='space-y-4'>
          <h2 className='text-xl font-bold'>About Us</h2>
          <p className='leading-[1.8]'>
            Welcome to our establishment, where passion for food meets exceptional service. We pride ourselves on using fresh, locally sourced ingredients to create delicious dishes for every palate. Our skilled chefs craft a diverse menu, ensuring a memorable dining experience for all. Whether  celebrating a special occasion or enjoying a casual meal, we’re here to make it unforgettable. Join us and discover the perfect blend of flavor and hospitality!
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-xl font-bold'>The Restaurant</h2>
          <ul className='space-y-2'>
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='text-xl font-bold'>Connect With Us</h2>
          <div className='flex gap-4 text-accent text-2xl pt-2'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <h2 className='text-xl font-bold'>Contact Us</h2>
          <p>Email: SAbahat@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: DHA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
