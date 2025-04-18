import Header1 from "../components/Header1";
import Nav from "../components/Nav";

const Men = () => {
  const shoesSections = [
    {
      title: "SHOES",
      items: [
        "Everyday Sneakers",
        "Active Shoes",
        "Water-Repellent Sneakers",
        "Slip-Ons",
        "High Tops",
        "Sandals",
        "Sale",
        "Shop all",
      ],
    },
    {
      title: "BESTSELLER",
      items: [
        "Tree Runner Go",
        "Tree Dasher 2",
        "Tree Runner",
        "Tree Glider",
        "Tree Dasher Relay",
        "Wool Runner Go",
        "Wool Runner",
        "Canvas Piper",
        "Shop all",
      ],
    },
    {
      title: "APPAREL AND MORE",
      items: [
        "Socks",
        "Tees",
        "Sweats",
        "Underwear",
        "Bags",
        "Hats",
        "Insoles",
        "Gift Cards",
      ],
    },
  ];

  const featuredItems = [
    {
      image: "images/img7.jpg",
      text: "NEW CANVAS PIPER",
    },
    {
      image: "/images/img9.jpg",
      text: "BESTSELLER",
    },
  ];

  return (
    <>
      <Header1 />
      <Nav />
      <div className="container mx-auto px-6 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* Shoe Sections */}
          {shoesSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Featured Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-2">FEATURED</h3>
            <div className="space-y-4">
              {featuredItems.map((featured, idx) => (
                <div
                  key={idx}
                  className="p-10 text-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${featured.image})` }}
                >
                  <span className="text-white font-semibold text-lg">{featured.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
