import Header1 from "../components/Header1";
import Nav from "../components/Nav";

const Socks: React.FC = () => {
  return (
    <>
      <Header1 />
      <Nav />

      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/Download.avif"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ANYTIME SOCKS
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Made with a blend of light, breathable materials like Tree Fiber and Organic Cotton,
            our socks keep your feet cool, dry, and smiling (if feet could smile).
          </p>
        </div>
      </section>
    </>
  );
};

export default Socks;
