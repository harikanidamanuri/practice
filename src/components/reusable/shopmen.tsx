import { Link } from "react-router-dom";
import Header1 from "../Header1";
import Nav from "../Nav";
import Shop from "./shop";

// Sample product data
const products = [
	{
		id: 1,
		image: "/images/1.avif",
		label: "Bestseller",
		name: "Men's Tree Runners",
		price: "$98"
	},
	// Add more products as needed
	{
		id: 2,
		image: "/images/1img.avif",
		name: "Men's Tree Dashers",
		price: "$135"
	},
	{
		id: 3,
		image: "/images/2.avif",
	},
	{
		id: 4,
		image: "/images/1img.avif",
		name: "Men's Tree runner Go",
		price: "$120"
	},
	{
		id: 5,
		image: "/images/2img.avif",
		name: "Men's wool Runners",
		price: "$98"
	},
	{
		id: 6,
		image: "/images/4img.avif",
		name: "Men's Canvas Pipes",
		price: "$90"
	},
	{
		id: 7,
		image: "/images/5img.avif",
		name: "Men's Tree Gliders",
		price: "$135"
	},
	{
		id: 8,
		image: "/images/6img.avif",
		name: "Men's Tree Dasheer Relay",
		price: "$130"
	},
	{
		id: 9,
		image: "/images/3.avif",
	},
	{
		id: 10,
		image: "/images/8img.avif",
		name: "Men's Wool Runner Go",
		price: "$110"
	},
	{
		id: 11,
		image: "/images/10img.avif",
		name: "Men's Wool Runner Mizzles",
		price: "$125"
	},
	{
		id: 12,
		image: "/images/11img.avif",
		name: "Men's Woll Dasher Mizzles",
		price: "$145"
	},
	{
		id: 13,
		image: "/images/9img.avif",
		name: "Men's Golf Dashers",
		price: "$145"
	},
	{
		id: 14,
		image: "/images/12img.avif",
		name: "Men's Trail Runners",
		price: "$140"
	},
	{
		id: 15,
		image: "/images/4.avif",
	},
	{
		id: 16,
		image: "/images/7img.avif",
		name: "Men's Tree Toppers",
		price: "$110"
	}
];

// Sidebar category items
const categories = [
	"Everyday Sneakers",
	"Active Shoes",
	"Slip Ons",
	"High Tops",
	"Sandals",
	"Water-Repellent Shoes",
	"Bestsellers",
	"Sale Shoes"
];

// Sizes
const sizes = [
	"8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"
];

const Shopmen = () => {
	return (
		<>
			<Header1 />
			<Nav />

			<div className="flex flex-col lg:flex-row px-4 md:px-8 py-10 gap-8">
				{/* Sidebar */}
				<aside className="w-full lg:w-1/4">
					<div className="text-sm text-gray-600 mb-4 font-bold">Home / Women's Shoes /</div>
					<h2 className="text-2xl font-bold mb-6">Bestsellers</h2>

					<ul className="space-y-2 text-gray-700">
						{categories.map((category, index) => (
							<li
								key={index}
								className={category === "Bestsellers" ? "font-semibold" : ""}
							>
								{category}
							</li>
						))}
					</ul>

					<hr className="my-6 border-gray-300" />

					{/* SIZES */}
					<div>
						<h3 className="font-bold text-gray-800 mb-2">Filter By:</h3>
						<h4 className="text-sm text-gray-700 mb-1 font-bold">SIZES</h4>
						<div className="flex flex-wrap gap-2 text-sm">
							{sizes.map(size => (
								<button
									key={size}
									className="border border-gray-400 px-3 py-1 hover:bg-gray-200"
								>
									{size}
								</button>
							))}
						</div>
					</div>

					<hr className="my-6 border-gray-300" />

					{/* BEST FOR */}
					<div>
						<h4 className="text-sm text-gray-700 font-bold mb-3">BEST FOR</h4>
						<div className="flex flex-col gap-3">
							{["Everyday", "Warm Weather", "Active", "Cool Weather", "Wet Weather"].map(option => (
								<label key={option} className="flex items-center space-x-3 cursor-pointer group">
									<input
										type="checkbox"
										className="w-5 h-5"
									/>
									<span className="text-sm text-gray-800">{option}</span>
								</label>
							))}
						</div>
					</div>

					<hr className="my-6 border-gray-300" />

					{/* MATERIAL */}
					<div>
						<h4 className="text-sm text-gray-700 font-bold mb-3">MATERIAL</h4>
						<div className="flex flex-col gap-3">
							{["Tree Fiber Blend", "Wool", "Canvas"].map(material => (
								<label key={material} className="flex items-center space-x-3 cursor-pointer group">
									<input
										type="checkbox"
										className="w-5 h-5"
									/>
									<span className="text-sm text-gray-800">{material}</span>
								</label>
							))}
						</div>
					</div>

					<hr className="my-6 border-gray-300" />

					{/* HUE */}
					<div>
						<h4 className="text-sm text-gray-700 font-bold mb-3">HUE</h4>
						<div className="flex flex-col gap-3">
							{[
								{ name: "Orange", color: "bg-orange-500" },
								{ name: "Green", color: "bg-green-500" },
								{ name: "White", color: "bg-white border border-gray-400" },
								{ name: "Blue", color: "bg-blue-500" },
								{ name: "Red", color: "bg-red-500" },
								{ name: "Gray", color: "bg-gray-500" },
								{ name: "Beige", color: "bg-yellow-100 border border-gray-300" },
								{ name: "Black", color: "bg-black" },
								{ name: "Brown", color: "bg-amber-900" }
							].map((hue, index) => (
								<label key={index} className="flex items-center space-x-3 cursor-pointer">
									<input
										type="radio"
										name="hue"
										className="sr-only peer"
									/>
									<div
										className={`w-4 h-4 rounded-full ${hue.color} ring-1 ring-gray-400 peer-checked:ring-2 peer-checked:ring-black`}
									></div>
									<span className="text-sm text-gray-800">{hue.name}</span>
								</label>
							))}
						</div>
					</div>
				</aside>


				{/* Product Section */}
				<main className="w-full lg:w-3/4">
					{/* Hero Banner */}
					<div
						className="relative p-6 mb-6 text-center flex flex-col items-center justify-center 
						bg-cover bg-center"
						style={{ backgroundImage: "url('/images/Download.avif')" }}
					>
						<div className="absolute inset-0 bg-black/40 rounded-lg" />
						<div className="relative z-10">
							<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-md">
								Bestsellers For A Reason
							</h2>
							<p className="text-white text-sm sm:text-base drop-shadow-md mt-2 max-w-md mx-auto">
								Everyone loves these super versatile styles—and so will you.
							</p>
						</div>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map(product => (
							<div key={product.id}>
								<Link to='/productdetail'>
								<img
									src={product.image}
									alt={product.name}
									className="rounded-lg mb-2 w-full object-cover"
									/>
									</Link>
								<div className="text-xs text-gray-500 uppercase">{product.label}</div>
								<h3 className="font-semibold">{product.name}</h3>
								<p>{product.price}</p>
							</div>
						))}
					</div>
				</main>
			</div>
			<Shop />
		</>
	);
};

export default Shopmen;
