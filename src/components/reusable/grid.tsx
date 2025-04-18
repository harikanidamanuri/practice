import React, { useRef } from "react";

const products = [
	{ id: 1, image: "/images/1-min.avif", name: "Women's Canvas Pipers", description: "Natural White / Hanami Night", price: "$90" },
	{ id: 2, image: "/images/5-min.avif", name: "Men's Canvas Pipers", description: "Natural Black", price: "$90" },
	{ id: 3, image: "/images/3-min.avif", name: "Women's Lounger Lift", description: "Weathered Grey", price: "$105" },
	{ id: 4, image: "/images/2-min.avif", name: "Men's Tree Runner Go", description: "Hanami Night", price: "$120" },
	{ id: 5, image: "/images/4-min.avif", name: "Women's Breeze Runners", description: "Blue Shade", price: "$98" },
];

const Grid = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		const container = scrollRef.current;
		if (container) {
			const scrollAmount = container.offsetWidth / 1.2;
			container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<div className="w-full bg-white py-8">
			<h3 className="text-xl font-bold text-start px-4 sm:px-8 mb-6">WORN IN THE WORLD</h3>

			<div className="relative">
				{/* Scroll Buttons */}
				<button
					onClick={() => scroll("left")}
					className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl text-gray-600 hover:text-black transition px-4 py-2 border border-gray-300 rounded-full z-10 bg-white"
				>
					&lt;
				</button>

				{/* Full-width scrollable container */}
				<div className="overflow-hidden w-full">
					<div
						ref={scrollRef}
						className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
					>
						{products.map((product) => (
							<div
								key={product.id}
								className="min-w-[80%] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[25%] flex-shrink-0 bg-white p-2"
							>
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-64 sm:h-72 object-cover mb-2 bg-gray-200"
								/>
								<h3 className="text-base sm:text-lg font-semibold truncate">{product.name}</h3>
								<p className="text-gray-600 text-sm truncate">{product.description}</p>
								<p className="text-black font-bold text-sm sm:text-base">{product.price}</p>
							</div>
						))}
					</div>
				</div>

				{/* Scroll Right Button */}
				<button
					onClick={() => scroll("right")}
					className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl text-gray-600 hover:text-black transition px-4 py-2 border border-gray-300 rounded-full z-10 bg-white"
				>
					&gt;
				</button>
			</div>

			{/* Mobile message */}
			<div className="sm:hidden text-center text-sm text-gray-500 mt-2">
				Swipe left to see more
			</div>
		</div>
	);
};

export default Grid;
