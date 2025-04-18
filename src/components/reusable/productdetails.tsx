import React, { useState } from "react";
import { Link } from "react-router-dom";
import Final from "./final";
import Header1 from "../Header1";
import Nav from "../Nav";
import Grid from "./grid";
import Grid2 from "../Grid2";

const productImages = [
	"/images/16.avif",  
	"/images/9img.avif",   
	"/images/10img.avif",   
	"/images/8img.avif",   
];

const ProductPage = () => {
	const [selectedColor, setSelectedColor] = useState<string>("rustic-orange");
	const [selectedSize, setSelectedSize] = useState<number | null>(null);
	const [currentImage, setCurrentImage] = useState<number>(0);

	return (
		<>
			<Header1 />
			<Nav />
		<div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
			{/* Product Details Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Image Gallery */}
				<div className="flex md:flex-row gap-4">
					{/* Thumbnails */}
					<div className="flex flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
						{productImages.map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`View ${index + 1}`}
								onClick={() => setCurrentImage(index)}
								className={`w-16 h-16 md:w-25 md:h-25  object-cover cursor-pointer border-2 transition-all duration-200 ${currentImage === index ? "border-black scale-105" : "border-gray-300 hover:border-black"
									}`}
							/>
						))}
					</div>

					{/* Main Image */}
					<div className="flex-1">
						<img
							src={productImages[currentImage]}
							alt="Selected View"
							className="w-full shadow-md"
						/>
					</div>
				</div>

				{/* Product Info */}
				<div>
					{/* Breadcrumbs */}
					<div className="text-sm mb-3">
						<Link to="/" className="hover:underline font-semibold">Home</Link>
						<span className="mx-1">/</span>
						<Link to="/men" className="hover:underline font-semibold">Men</Link>
						<span className="mx-1">/</span>
						<span className="text-black font-medium">Everyday Sneakers</span>
					</div>

					{/* Product Title */}
					<h1 className="text-3xl font-bold mb-2">Men's Tree Runners</h1>
					<p className="text-gray-500">Light and Breezy Fan-Favorite Sneaker</p>

					{/* Price and Shipping */}
					<div className="flex items-center gap-2 mt-3">
						<span className="text-xl font-semibold">$98</span>
						<span className="text-green-600 text-sm">FREE SHIPPING</span>
					</div>

					{/* Rating */}
					<p className="mt-1 text-yellow-500">★★★★☆ (9936)</p>

					{/* Color Options */}
					<div className="mt-6">
						<p className="font-medium mb-2">COLOR:</p>
						<div className="flex space-x-2">
							<button
								onClick={() => setSelectedColor("rustic-orange")}
								className={`w-8 h-8 rounded-full border-2 ${selectedColor === "rustic-orange"
									? "border-black"
									: "border-gray-300"
									}`}
								style={{ backgroundColor: "#d35400" }}
							/>
							<button
								onClick={() => setSelectedColor("navy-blue")}
								className={`w-8 h-8 rounded-full border-2 ${selectedColor === "navy-blue"
									? "border-black"
									: "border-gray-300"
									}`}
								style={{ backgroundColor: "#34495e" }}
							/>
						</div>
					</div>

					{/* Size Options */}
					<div className="mt-6">
						<p className="font-medium mb-1">SELECT SIZE:</p>
						<div className="grid grid-cols-4 gap-2 mt-2">
							{[7, 8, 9, 10, 11, 12].map((size) => (
								<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`border px-3 py-1 rounded ${selectedSize === size
										? "border-black font-semibold"
										: "border-gray-300"
										}`}
								>
									{size}
								</button>
							))}
						</div>
						<p className="text-sm text-gray-500 mt-2">
							This style is available in whole sizes only. See{" "}
							<a className="underline" href="#">Size Chart</a>
						</p>
					</div>

					{/* Add to Cart */}
					<div className="mt-6">
						<button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition">
							Add to Cart - $98
						</button>
					</div>
				</div>
			</div>

			{/* Extra Features Section */}
				<Final />
				<Grid />
				<Grid2 />
			</div>
			</>
	);
};

export default ProductPage;
