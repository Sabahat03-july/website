import Image from 'next/image';
import React from 'react';

interface PropsTypes {
    img: string;
    title: string;
    price: string;
    description: string;
}

const MenuCard: React.FC<PropsTypes> = ({ img, title, description, price }) => {
    return (
        <div className='flex gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition'>
            <Image src={img} alt={title} className='h-32 w-32 rounded-md object-cover' />
            <div className='flex flex-col justify-between'>
                <div>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <p className='text-sm text-gray-600'>{description}</p>
                </div>
                <p className='text-sm font-bold text-accent'>Price: {price}</p>
            </div>
        </div>
    );
};

export default MenuCard;
