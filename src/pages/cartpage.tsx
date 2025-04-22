import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";

const CartPage = () => {
	const { cart, removeFromCart } = useCart();

	const getTotalPrice = () => {
		return cart.reduce((total, item) => {
			const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
			return total + price;
		}, 0);
	};

	return (
		<div className="max-w-5xl mx-auto px-4 py-8 font-sans">
			<h1 className="text-3xl font-bold mb-6"> Allbirds Cart</h1>

			{cart.length === 0 ? (
				<div className="text-center text-gray-600">
					<p>your allbirds cart is empty</p>
					<Link to="/" className="text-blue-600 hover:underline mt-4 block">
						Go shopping →
					</Link>
				</div>
			) : (
				<div className="space-y-6">
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex items-center justify-between border-b pb-4"
						>
							<div className="flex items-center gap-4">
								<img
									src={item.images[0]}
									alt={item.name}
									className="w-20 h-20 object-cover rounded"
								/>
								<div>
									<h2 className="text-lg font-semibold">{item.name}</h2>
									<p className="text-gray-600">{item.price}</p>
									<p className="text-gray-600">{ item.description}</p>
								</div>
							</div>
							<button
								onClick={() => removeFromCart(item.id)}
								className="text-red-600 hover:underline"
							>
								Remove
							</button>
						</div>
					))}

					<div className="text-right text-xl font-semibold mt-6">
						Total: ${getTotalPrice().toFixed(2)}
					</div>
				</div>
			)}
		</div>
	);
};

export default CartPage;
