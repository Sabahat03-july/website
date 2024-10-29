import React from 'react';
import Dash from './Dash';
import Image from 'next/image';

const Features = () => {
  return (
    <div className='container pt-40'>
      <h2 className='text-6xl font-bold'>Our</h2>
      <h2 className='text-6xl font-bold pt-2'>
        Featured <span className='text-accent'>Food</span>
      </h2>
      <p className='max-w-[550px] pt-10 text-gray-700'>
        Fresh Ingredients: Highlights the use of fresh and locally sourced ingredients. <br />
        Flavor Focus: Emphasizes the quality and experience of the food. <br />
        Diversity: Mentions catering to various tastes and dietary preferences.
      </p>
      <Dash />

      <div className='grid md:grid-cols-3 gap-16 mt-10'>
        {/* Shrimp Salad */}
        <div className='w-fit mx-auto'>
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/dash.jpg"
            alt="Shrimp Salad"
            width={300}
            height={600}
          />
          <div className='space-y-4'>
            <Dash />
            <h2 className='font-medium text-xl'>Shrimp Salad</h2>
            <p className='text-gray-700 text-[14px] xl:text-[16px]'>
              Enjoy a refreshing shrimp salad made with tender shrimp, crisp greens,
              and a zesty dressing. Each bite bursts with flavor, complemented by
              cherry tomatoes, avocado, and a hint of lemon. Perfect for a light lunch
              or a satisfying dinner!
            </p>
          </div>
        </div>

        {/* Baked Apple */}
        <div className='w-fit mx-auto'>
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/apple.jpg"
            alt="Baked Apple"
            width={500}
            height={900}
          />
          <div className='space-y-4'>
            <Dash />
            <h2 className='font-medium text-xl'>Baked Apple</h2>
            <p className='text-gray-700 text-[14px] xl:text-[16px]'>
              Delight in our baked apple dessert, featuring tender apples baked to perfection 
              with a sprinkle of cinnamon and a touch of brown sugar, topped with a scoop 
              of vanilla ice cream. A sweet ending to any meal!
            </p>
          </div>
        </div>

        {/* Cherries Chicken */}
        <div className='w-fit mx-auto'>
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/cherries.webp"
            alt="Cherries Chicken"
            width={300}
            height={600}
          />
          <div className='space-y-4'>
            <Dash />
            <h2 className='font-medium text-xl'>Cherries Chicken</h2>
            <p className='text-gray-700 text-[14px] xl:text-[16px]'>
              Enjoy a unique dish combining tender chicken with a sweet cherry glaze. 
              This delightful meal brings together savory and sweet flavors for an 
              unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
