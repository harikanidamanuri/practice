import { Link } from "react-router-dom";
import Header1 from "../Header1";
import Nav from "../Nav";
import Shop from "./shop";
import { products } from "../../data/products";

const categories = [
	"Everyday Sneakers", "Active Shoes", "Slip Ons", "High Tops", "Sandals",
	"Water-Repellent Shoes", "Bestsellers", "Sale Shoes"
];

const sizes = [
	"8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"
];

const ShopMen = () => {
	return (
		<>
			<Header1 />
			<Nav />

			<div className="flex flex-col lg:flex-row px-4 md:px-8 py-10 gap-8">
				{/* Sidebar */}
				<aside className="w-full lg:w-1/4">
					<div className="text-sm text-gray-600 mb-4 font-bold">Home / Men's Shoes /</div>
					<h2 className="text-2xl font-bold mb-6">Bestsellers</h2>

					<ul className="space-y-2 text-gray-700">
						{categories.map((category, index) => (
							<li key={index} className={category === "Bestsellers" ? "font-semibold" : ""}>
								{category}
							</li>
						))}
					</ul>

					<hr className="my-6 border-gray-300" />

					{/* Sizes */}
					<div>
						<h3 className="font-bold text-gray-800 mb-2">Filter By:</h3>
						<h4 className="text-sm text-gray-700 mb-1 font-bold">SIZES</h4>
						<div className="flex flex-wrap gap-2 text-sm">
							{sizes.map(size => (
								<button key={size} className="border border-gray-400 px-3 py-1 hover:bg-gray-200">
									{size}
								</button>
							))}
						</div>
					</div>

					<hr className="my-6 border-gray-300" />

					{/* Material Filter */}
					<div>
						<h4 className="text-sm text-gray-700 font-bold mb-3">MATERIAL</h4>
						<div className="flex flex-col gap-3">
							{["Tree Fiber Blend", "Wool", "Canvas"].map(material => (
								<label key={material} className="flex items-center space-x-3 cursor-pointer group">
									<input type="checkbox" className="w-5 h-5" />
									<span className="text-sm text-gray-800">{material}</span>
								</label>
							))}
						</div>
					</div>

					{/* Hue Filter */}
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
									<input type="radio" name="hue" className="sr-only peer" />
									<div className={`w-4 h-4 rounded-full ${hue.color} ring-1 ring-gray-400 peer-checked:ring-2 peer-checked:ring-black`} />
									<span className="text-sm text-gray-800">{hue.name}</span>
								</label>
							))}
						</div>
					</div>

					<hr className="my-6 border-gray-300" />
				</aside>

				{/* Product Section */}
				<main className="w-full lg:w-3/4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map(product => (
							<div key={product.id} className="product-card">
								<Link to={`/productdetail/men/${product.id}`}>
									<img
										src={product.image}  
										alt={product.name || "Product Image"}
										className="rounded-lg mb-2 w-full object-cover"
									/>
								</Link>
								{product.label && (
									<div className="text-xs text-gray-500 uppercase">{product.label}</div>
								)}
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

export default ShopMen;
