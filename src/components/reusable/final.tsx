import React from "react";

interface FeatureItem {
	title: string;
	description: string;
	image: string;
}

const features: FeatureItem[] = [
	{
		title: "Made From Nature",
		description:
			"Our proprietary knit feels lightweight, breathable, and pleasantly cool thanks to a tree fiber material blend.",
		image: "/images/FINAL1M.avif",
	},
	{
		title: "Wear-All-Day Support",
		description:
			"Experience the comfort of SweetFoam®, our cushioned midsole made from sugarcane, providing all-day happiness for your feet.",
		image: "/images/FINAL2M.avif",
	},
	{
		title: "Easy to Clean",
		description:
			"Our shoes are machine washable—just remove the insoles and hand wash them separately—to keep every step as fresh as the first.",
		image: "/images/FINAL3M.avif",
	},
];

const Final: React.FC = () => {
	return (
		<section className="w-full bg-white py-16 px-4 md:px-8">
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<div key={index} className="flex flex-col text-left">
						<img
							src={feature.image}
							alt={feature.title}
							className="w-full h-auto md:h-[500px] object-cover shadow-md"
						/>
						<h3 className="mt-6 text-xl font-bold text-black">{feature.title}</h3>
						<p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Final;
