import React from 'react';
import Dash from './Dash';
import Image from 'next/image';

const menuData = [
    {
        img: "/cake.jpg",
        title: "Delicious Cake",
        description: "Indulge in our moist and rich cake, layered with creamy frosting and topped with fresh fruit. Perfect for celebrations or a sweet treat any time!",
        price: "$29.50",
        width: 300,
        height: 300
    },
    {
        img: "/fried.avif",
        title: "Chicken Fried Steak",
        description: "Our signature Chicken Fried Steak is made with fresh, locally sourced ingredients, featuring a mix of vegetables, herbs, and spices. Crispy on the outside and tender on the inside, it's a must-try dish!",
        price: "$39.50",
        width: 300,
        height: 300
    },
    {
        img: "/pizza.jpg",
        title: "Italian Pizza",
        description: "Indulge in our authentic Italian Pizza, crafted with fresh, locally sourced ingredients. Topped with a delightful mix of vegetables, herbs, and rich mozzarella cheese, it's a slice of heaven!",
        price: "$29.50",
        width: 300,
        height: 300
    },
    {
        img: "/best-Oven.jpg",
        title: "Baked Salmon",
        description: "Savor our Baked Salmon, seasoned to perfection and baked until tender. Served with a side of fresh vegetables and a zesty lemon butter sauce, it’s a healthy and delicious choice!",
        price: " $39.50",
        width: 300,
        height: 300
    },
    {
        img: "/vagetarian.jpg",
        title: "Vegetarian Options",
        description: "Enjoy a variety of our delicious vegetarian dishes, made with fresh, seasonal vegetables and flavorful herbs. Perfect for those looking for a healthy and satisfying meal!",
        price: "$39.50",
        width: 300,
        height: 300
    },
    {
        img: "/sig-de.jpg",
        title: "Signature Desserts",
        description: "Treat yourself to our signature desserts, crafted with the finest ingredients. From rich chocolate cakes to fruity tarts, each dessert is a perfect finale to your meal!",
        price: "$39.50",
        width: 300,
        height: 300
    }
];

const Menu = () => {
    return (
        <div className='container pt-40'>
            <div className='space-y-4 w-fit max-auto text-center'>
                <h2 className='text-4xl md:text-6xl font-bold'>Our <span className='text-accent'>Menu</span></h2>
                <p className='text-gray-700'>
                    At our establishment, we pride ourselves on offering a diverse selection of culinary delights that cater to every taste and preference. From fresh, locally sourced ingredients to meticulously crafted dishes, each item on our menu is designed to provide an unforgettable dining experience. Whether you’re in the mood for a savory entrée, a light salad, or a decadent dessert, our menu has something for everyone. Explore our offerings and discover your new favorites today!
                </p>
                <div className='w-fit mx-auto'>
                    <Dash />
                </div>
            </div>
            <ul className='mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto'>
                <li className='bg-accent text-white p-1'>Appetizers</li>
                <li>Breakfast</li>
                <li>Salads</li>
                <li>Meat & Fish</li>
                <li>Soup</li>
                <li>Dessert</li>
                <li>Drinks</li>
            </ul>
            <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
                <div className='w-fit mx-auto'>
                    <Image className='w-[100%] max-w-[400px] h-auto' src="/appetizers.jpg" alt='dish' height={500} width={500} />
                </div>
                <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
                    {menuData.map((item, index) => (
                        <div key={index} className='border rounded-lg p-4 shadow-md'>
                            <Image src={item.img} alt={item.title} className='h-32 w-32 rounded-md mb-2' width={item.width} height={item.height} />
                            <h3 className='font-semibold text-lg'>{item.title}</h3>
                            <p className='text-sm'>{item.description}</p>
                            <p className='text-sm text-gray-500'>Price: {item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
