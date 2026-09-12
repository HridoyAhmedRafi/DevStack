import Logo from "../assets/logo-text.png";

const Navber = () => {
  return (
    <div>
      <nav className="border-b border-[#90929533] grid grid-cols-2 md:grid-cols-3 items-center justify-center container mx-auto px-4 py-4 fixed top-0 left-0 right-0 z-50 bg-white  ">
        <div>
          <img src={Logo} alt="DevStack" className="" />
        </div>

        <ul className="hidden md:flex justify-center gap-5 text-[#475569]">
          <li className="text-[#DB2777] cursor-pointer">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex justify-center  gap-4">
          <button className="cursor-pointer">Sign In</button>
          <button className="bg-[#D91B7E] py-1.75 px-4 text-white rounded-3xl cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
