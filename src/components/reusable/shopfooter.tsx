import React from 'react';

interface Shoe {
	id: number;
	title: string;
	imageUrl: string;
}

const shoes: Shoe[] = [
	{
		id: 1,
		title: 'Sporty Runner',
		imageUrl: '/images/19.avif',
	},
	{
		id: 2,
		title: 'Classic Leather',
		imageUrl: '/images/1.avif',
	},
	{
		id: 3,
		title: 'Urban Sneaker',
		imageUrl: '/images/17.avif',
	},
	{
		id: 4,
		title: 'Modern Trainer',
		imageUrl: '/images/18.avif',
	},
];

const Shopfooter: React.FC = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 py-8 gap-10 bg-gray-100">
			{/* Left Side Heading */}
			<div className="text-center lg:text-left lg:w-1/4">
				<h2 className="text-2xl font-semibold text-gray-800">Explore More</h2>
				<h1 className="text-3xl sm:text-4xl font-bold text-black mt-2">Men's Shoes</h1>
			</div>

			{/* Image Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mt-6 lg:mt-0">
				{shoes.map((shoe) => (
					<div key={shoe.id} className="flex flex-col items-center text-center">
						<img
							src={shoe.imageUrl}
							alt={shoe.title}
							className="w-full max-w-[280px] h-auto object-cover shadow-md"
						/>
						<h3 className="mt-3 text-lg font-medium text-gray-700">
							{shoe.title}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shopfooter;
