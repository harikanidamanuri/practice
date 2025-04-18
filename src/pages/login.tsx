import React, { useState } from "react";

const LoginForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted Email:", email);
		setIsSubmitted(true);
		setEmail(""); // clear input
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
			<div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
				{/* Logo centered */}
				<div className="flex justify-center mb-6">
					<img
						src="./images/Allbirdslogo.png"
						alt="Allbirds Logo"
						className="h-10"
					/>
				</div>

				{/* Title */}
				<h2 className="text-xl font-semibold mb-2 text-center">Log in</h2>
				<p className="text-sm text-gray-600 mb-6 text-center">
					Choose how you'd like to log in
				</p>

				{/* Shop Login Button */}
				<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium mb-4">
					Sign in with shop
				</button>

				{/* Divider */}
				<div className="flex items-center justify-center mb-4">
					<div className="w-full border-t border-gray-300" />
					<span className="px-2 text-gray-500 text-sm">or</span>
					<div className="w-full border-t border-gray-300" />
				</div>

				{/* Email Form */}
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Email"
						value={email}
						required
						onChange={(e) => {
							setEmail(e.target.value);
							setIsSubmitted(false); // reset color if user types again
						}}
						className="w-full border border-gray-400 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>

					{/* Submit Button */}
					<button
						type="submit"
						className={`w-full py-2 rounded-md font-semibold transition-colors duration-300 ${isSubmitted
								? "bg-green-600 text-white hover:bg-green-700"
								: "bg-gray-300 text-gray-600 hover:bg-gray-400"
							}`}
					>
						Continue
					</button>
				</form>

				{/* Privacy Link */}
				<div className="text-xs text-gray-500 mt-4 text-start">
					<a href="#" className="underline">
						Privacy
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
