import React from "react";
import AllbirdsApproach from "../allbirdsapproach";
import FooterData from "../FooterData";

const Shopfooter2: React.FC = () => {
	return (
		<div className="px-4 md:px-12 lg:px-20 py-10 text-gray-800">
			{/* Title Section */}
			<section className="mb-12 text-center md:text-left">
				<h1 className="text-3xl md:text-4xl font-semibold mb-4">
					Men's Bestsellers
				</h1>
				<p className="mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
					Discover the most-loved styles that have earned their stripes as customer favorites. From the iconic Wool Runners that started it all to the versatile Tree Dashers that
					revolutionized sustainable performance, our bestsellers combine innovation with unmatched
					comfort. These tried-and-true styles have won over countless feet with their perfect
					balance of cushioning, support, and design—making every step feel as good as it looks.
				</p>
			</section>

			{/* Additional Sections */}
			<AllbirdsApproach />
			<FooterData />
		</div>
	);
};

export default Shopfooter2;
