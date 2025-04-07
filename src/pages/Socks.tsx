import Header1 from "../components/Header1";
import Nav from "../components/Nav";

const Socks: React.FC = () => {
  return (
    <>
    <Header1 />
    <Nav />
    <section className="w-full h-[400px] md:h-[350px] flex flex-col items-center justify-center text-white text-center px-4 relative">
      {/* Image */}
      <img 
        src="/images/Download.avif" 
        alt="Banner" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Subtext */}
      <h1 className="text-4xl mt-4 text-lg max-w-2xl relative z-10">ANYTIME SOCKS</h1>
      <p className="mt-4 text-lg max-w-2xl relative z-10">
       Made with a blend of light, breathable materials like tree fiber and Organic Cotton,our socks keep your feet cool,dry,and smilling(if feet could smile).
      </p>
    </section>
    </>
  );
};

export default Socks;