import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Final from "./final";
import Header1 from "../Header1";
import Nav from "../Nav";
import Grid from "./grid";
import Grid2 from "../Grid2";
// Type for a single product
interface Product {
	id: number;
	name: string;
	price: string;
	description: string;
	images: string[];
}

// Example products data
const products: Product[] = [
	{
		id: 1,
		name: "Men's Tree Runners",
		price: "$98",
		description: "Light and Breezy Fan-Favorite Sneaker, Designed for Everyday Wear",
		images: ["/images/1.avif", "/images/6img.avif"],
	},
	{
		id: 2,
		name: "Men's Tree Dasher 2",
		price: "$135",
		description: "Breathable Knit Active Shoe, Made From Natural Materials for Everyday Performance",
		images: ["/images/1img.avif", "/images/8img.avif"],
	},
	{
		id: 3,
		name: "Men's Canvas Kicks",
		price: "$86",
		description: "Eco-friendly canvas comfort",
		images: ["/images/2.avif", "/images/7img.avif"],
	},
	{
		id: 4,
		name: "Men's Tree Runner Go",
		price: "$135",
		description: "Breathable Everyday Sneaker, Upgraded With Enhanced Durability And Cushioning",
		images: ["/images/10img.avif", "/images/7img.avif"],
	},
	{
		id: 5,
		name: "Men's Wool Runners",
		price: "$124",
		description: "The Original Best-Selling Sneaker Combines Soft Merino Wool With Cloud-Like Comfort",
		images: ["/images/2img.avif", "/images/8img.avif"],
	},
	{
		id: 6,
		name: "Men's Canvas Pipers",
		price: "$90",
		description: "",
		images: ["/images/4img.avif", "/images/7img.avif"],
	},
	{
		id: 7,
		name: "Men's Tree Gliders",
		price: "$89",
		description: "Breathable Active Shoe With Plush, Supportive Cushioning For Everyday Comfort",
		images: ["/images/5img.avif", "/images/6img.avif"],
	},
	{
		id: 8,
		name: "Men's Tree Dasher Relay",
		price: "$130",
		description: "Laceless Active Shoe, Designed For Slip-On Comfort And On-The-Go Movement.",
		images: ["/images/6img.avif", "/images/9img.avif"],
	},
	{
		id: 9,
		name: "Men's Wool Runner Go",
		price: "$110",
		description: "Cozy Merino Wool Sneaker With Upgraded Cushioning, Designed For Effortless On-The-Go Comfort",
		images: ["/images/3.avif", "/images/8img.avif"],
	},
	{
		id: 10,
		name: "Men's Wool Runner Mizzles",
		price: "$124",
		description: "Water-Repellent Wool Sneaker That Keeps Feet Warm And Dry In Unpredictable Weather",
		images: ["/images/8img.avif", "/images/4img.avif"],
	},
	{
		id: 11,
		name: "Men's Wool Dasher Mizzles",
		price: "$145",
		description: "Water-Repellent Wool Active Shoe With High-Traction Sole For Confident Strides In Wet Weather",
		images: ["/images/10.avif", "/images/8img.avif"],
	},
	{
		id: 12,
		name: "Men's Golf Dashers",
		price: "$145",
		description: "Nature-Made Golf Shoe, Engineered For Full-Swing Stability And All-Day Comfort",
		images: ["/images/11img.avif", "/images/12img.avif"],
	},
	{
		id: 13,
		name: "Men's Trail Runners",
		price: "$140",
		description: "Technical Adventure Shoe, Built For Rugged Durability And Sneaker-Like Comfort",
		images: ["/images/9img.avif", "/images/4f.avif"],
	},
	{
		id: 14,
		name: "Men's Canvas Kicks",
		price: "$89",
		description: "Eco-friendly canvas comfort",
		images: ["/images/12img.avif", "/images/8img.avif"],
	},
	{
		id: 15,
		name: "Men's Canvas Kicks",
		price: "$89",
		description: "Eco-friendly canvas comfort",
		images: ["/images/4.avif", "/images/14.avif"],
	},
	{
		id: 16,
		name: "Men's Tree Toppers",
		price: "$110",
		description: "",
		images: ["/images/7img.avif", "/images/img5.jpg"],
	},
];

const ProductPage = () => {
	const { id } = useParams<{ id: string }>();
	const productId = parseInt(id || "", 10);

	const product = products.find((p) => p.id === productId);

	// If product not found
	if (!product) {
		return <div className="p-6 text-center text-red-500">Product not found</div>;
	}

	const [selectedColor, setSelectedColor] = useState<string>("rustic-orange");
	const [selectedSize, setSelectedSize] = useState<number | null>(null);
	const [currentImage, setCurrentImage] = useState<number>(0);

	return (
		<>
			<Header1 />
			<Nav />
			<div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Image Gallery */}
					<div className="flex md:flex-row gap-4">
						{/* Thumbnails */}
						<div className="flex flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
							{product.images.map((img, index) => (
								<img
									key={index}
									src={img}
									alt={`View ${index + 1}`}
									onClick={() => setCurrentImage(index)}
									className={`w-16 h-16 md:w-25 md:h-25 object-cover cursor-pointer border-2 transition-all duration-200 ${currentImage === index
											? "border-black scale-105"
											: "border-gray-300 hover:border-black"
										}`}
								/>
							))}
						</div>

						{/* Main Image */}
						<div className="flex-1">
							<img
								src={product.images[currentImage]}
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
							<span className="text-black font-medium">{product.name}</span>
						</div>

						{/* Product Title */}
						<h1 className="text-3xl font-bold mb-2">{product.name}</h1>
						<p className="text-gray-500">{product.description}</p>

						{/* Price and Shipping */}
						<div className="flex items-center gap-2 mt-3">
							<span className="text-xl font-semibold">{product.price}</span>
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
									className={`w-8 h-8 rounded-full border-2 ${selectedColor === "rustic-orange" ? "border-black" : "border-gray-300"
										}`}
									style={{ backgroundColor: "#d35400" }}
								/>
								<button
									onClick={() => setSelectedColor("navy-blue")}
									className={`w-8 h-8 rounded-full border-2 ${selectedColor === "navy-blue" ? "border-black" : "border-gray-300"
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
										className={`border px-3 py-1 rounded ${selectedSize === size ? "border-black font-semibold" : "border-gray-300"
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
								Add to Cart - {product.price}
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
