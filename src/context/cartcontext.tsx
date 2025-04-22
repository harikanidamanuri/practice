import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the Product type
export interface Product {
	id: number;
	name: string;
	price: string;
	description: string;
	images: string[];
}

interface CartContextType {
	cart: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	isInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error("useCart must be used within a CartProvider");
	return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<Product[]>([]);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
		setCart(storedCart);
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product: Product) => {
		if (!cart.find(item => item.id === product.id)) {
			setCart([...cart, product]);
		}
	};

	const removeFromCart = (productId: number) => {
		setCart(cart.filter(item => item.id !== productId));
	};

	const isInCart = (productId: number) => {
		return cart.some(item => item.id === productId);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
			{children}
		</CartContext.Provider>
	);
};
