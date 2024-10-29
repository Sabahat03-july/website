import Image from 'next/image';
import React from 'react';


const NavBar = () => {
  return (
    <div className='container'>
      <div className="flex items-start pt-6">
        <Image 
          src="/logo.jpg" 
          alt="Logo" 
          width={50} // Adjust as needed
          height={50} // Adjust as needed
        />
        <ul className=' md:flex hidden gap-8 items-center font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Food</li>
            <li>Dish</li>
            <li>Contact</li>
            <button className='bg-accent text-white px-6 py-2 rounded-3xl'>SignUp</button>
        </ul>




      </div>
    </div>
  );
};

export default NavBar;
