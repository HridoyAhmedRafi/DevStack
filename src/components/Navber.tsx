import Logo from "../assets/logo-text.png";

const Navber = () => {
  return (
    <div className="border-b border-[#90929533]">
      <nav className="flex items-center justify-between container mx-auto px-4 py-4 fixed top-0 left-0 right-0 z-50 bg-white  ">
        <div>
          <img src={Logo} alt="DevStack" />
        </div>

        <ul className="flex justify-between gap-5 text-[#475569]">
          <li className="text-[#DB2777]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex justify-between gap-4">
          <button>Sign In</button>
          <button className="bg-[#D91B7E] py-1.75 px-4 text-white rounded-3xl">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
