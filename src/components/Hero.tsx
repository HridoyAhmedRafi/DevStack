import HeroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center  container mx-auto px-4 my-25">
        <div className="space-y-3">
          <h1 className="text-[60px] font-bold">
            Build Your Ideal<br></br>
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[18px] text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare{" "}
            <br></br>them side by side, and put together the stack that fits
            your next project.
          </p>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer bg-linear-to-r from-orange-500 to-pink-500 py-2 px-3 rounded text-white">
              Explore Technologies
            </button>
            <button className="cursor-pointer border border-[#7273745a] py-2 px-10 rounded text-[#475569]">
              Learn More
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
