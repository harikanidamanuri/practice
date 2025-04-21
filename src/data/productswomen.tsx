export const products = [
	{
		id: 1,
		image: "/images/11w.avif",
		label: "Bestseller",
		name: "Women's Tree Runners",
		price: "$98"
	},
	{
		id: 2,
		image: "/images/2w.avif",
		name: "Women's Tree Dashers",
		price: "$135"
	},
	{
		id: 3,
		image: "/images/1w.avif",
	},
	{
		id: 4,
		image: "/images/1img.avif",
		name: "Women's Tree runner Go",
		price: "$120"
	},
	{
		id: 5,
		image: "/images/2img.avif",
		name: "Women's wool Runners",
		price: "$98"
	},
	{
		id: 6,
		image: "/images/4img.avif",
		name: "Women's Canvas Pipes",
		price: "$100"
	},
	{
		id: 7,
		image: "/images/5img.avif",
		name: "Women's Tree Gliders",
		price: "$90"
	},
	{
		id: 8,
		image: "/images/6img.avif",
		name: "Women's Tree Dasheer Relay",
		price: "$120"
	},
	{
		id: 9,
		image: "/images/3w.avif",
	},
	{
		id: 10,
		image: "/images/8img.avif",
		name: "Women's Wool Runner Go",
		price: "$135"
	},
	{
		id: 11,
		image: "/images/10img.avif",
		name: "Women's Wool Runner Mizzles",
		price: "$135"
	},
	{
		id: 12,
		image: "/images/11img.avif",
		name: "Women's Woll Dasher Mizzles",
		price: "$105"
	},
	{
		id: 13,
		image: "/images/9img.avif",
		name: "Women's Golf Dashers",
		price: "$140"
	},
	{
		id: 14,
		image: "/images/12img.avif",
		name: "Women's Trail Runners",
		price: "$98"
	},
	{
		id: 16,
		image: "/images/7img.avif",
		name: "Women's Tree Toppers",
		price: "$110"
	},
	{
		id: 17,
		image: "/images/7img.avif",
		name: "Women's Tree Toppers",
		price: "$125"
	}
];
export const getProductById = (id: number | string): Promise<typeof products[0]> => {
	const numericId = parseInt(id.toString()); 
	const product = products.find(p => p.id === numericId);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product ? resolve(product) : reject("Product not found");
		}, 200);
	});
};
