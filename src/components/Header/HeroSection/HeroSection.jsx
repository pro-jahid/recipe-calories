import hero from "../../../assets/hero.png";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[1000px] mt[500px] rounded-lg object-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="text-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-[150px] pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-[250px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold text-center mb-6">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-green-50 text-center text-base sm:text-lg md:text-xl lg:text-2xl">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-9 justify-center mt-7">
          <button className="bg-green-400 p-4 rounded-3xl text-black font-bold hover:bg-green-500 transition duration-300">
            Explore Now
          </button>
          <button className="border border-green-400 text-green-400 rounded-3xl p-4 font-bold hover:bg-green-400 hover:text-black transition duration-300">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
