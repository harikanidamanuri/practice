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
		imageUrl: '/images/4w.avif',
	},
	{
		id: 2,
		title: 'Classic Leather',
		imageUrl: '/images/5w.avif',
	},
	{
		id: 3,
		title: 'Urban Sneaker',
		imageUrl: '/images/6w.avif',
	},
	{
		id: 4,
		title: 'Modern Trainer',
		imageUrl: '/images/7w.avif',
	},
	{
		id: 5,
		title: 'Street Glide',
		imageUrl: '/images/8w.avif',
	},
	{
		id: 6,
		title: 'Eco Runner',
		imageUrl: '/images/18.avif',
	},
];

const Shopfooter: React.FC = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 py-10 gap-10 bg-gray-100">
			{/* Left Side Heading */}
			<div className="text-center lg:text-left w-full lg:w-1/4">
				<h2 className="text-2xl font-semibold text-gray-800">Explore More</h2>
				<h1 className="text-3xl sm:text-4xl font-bold text-black mt-2">Women's Shoes</h1>
			</div>

			{/* Image Grid */}
			<div className="w-full lg:w-3/4 mt-8 lg:mt-0">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{shoes.map((shoe) => (
						<div key={shoe.id} className="flex flex-col items-center text-center">
							<img
								src={shoe.imageUrl}
								alt={shoe.title}
								className="w-full max-w-[280px] h-auto object-cover shadow-md rounded"
							/>
							<h3 className="mt-3 text-lg font-medium text-gray-700">
								{shoe.title}
							</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shopfooter;
