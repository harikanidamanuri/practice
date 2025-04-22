export const products = [
	{ id: 1, image: "/images/1.avif", label: "Bestseller", name: "Men's Tree Runners", price: "$98" },
	{ id: 2, image: "/images/1img.avif", name: "Men's Tree Dashers", price: "$135" },
	{ id: 3, image: "/images/2.avif", },
	{ id: 4, image: "/images/10img.avif", name: "Men's Tree Runner Go", price: "$120" },
	{ id: 5, image: "/images/2img.avif", name: "Men's Wool Runners", price: "$98" },
	{ id: 6, image: "/images/4img.avif", name: "Men's Canvas Pipes", price: "$90" },
	{ id: 7, image: "/images/5img.avif", name: "Men's Tree Gliders", price: "$135" },
	{ id: 8, image: "/images/6img.avif", name: "Men's Tree Dasher Relay", price: "$130" },
  { id: 9, image: "/images/3.avif" },
	{ id: 10, image: "/images/8img.avif", name: "Men's Wool Runner Go", price: "$110" },
	{ id: 11, image: "/images/10img.avif", name: "Men's Wool Runner Mizzles", price: "$125" },
	{ id: 12, image: "/images/11img.avif", name: "Men's Wool Dasher Mizzles", price: "$145" },
	{ id: 13, image: "/images/9img.avif", name: "Men's Golf Dashers", price: "$145" },
	{ id: 14, image: "/images/12img.avif", name: "Men's Trail Runners", price: "$140" },
	{ id: 15, image: "/images/4.avif"},
	{ id: 16, image: "/images/7img.avif", name: "Men's Tree Toppers", price: "$110" },
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

