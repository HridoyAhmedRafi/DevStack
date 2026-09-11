import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-b border-[#90929533] container mx-auto px-4 py-20 flex justify-between">
        <div>
          <img src={FooterLogo} alt="DevStack" />
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            <br></br>
            modern software.
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          <li className="text-[#0F172A] font-bold">PRODUCT</li>
          <li className="text-[#64748B]">Home</li>
          <li className="text-[#64748B]">Technologies</li>
          <li className="text-[#64748B]">Projects</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="text-[#0F172A] font-bold">COMPANY</li>
          <li className="text-[#64748B]">About</li>
          <li className="text-[#64748B]">Contact</li>
          <li className="text-[#64748B]">Careers</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="text-[#0F172A] font-bold">LEGAL</li>
          <li className="text-[#64748B]">Privacy Policy</li>
          <li className="text-[#64748B]">Terms of Service</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="text-[#0F172A] font-bold">GitHub</li>
          <li className="text-[#64748B]">Twitter</li>
          <li className="text-[#64748B]">LinkedIn</li>
        </ul>
      </div>

      <div className=" py-10 flex justify-between container mx-auto px-4    ">
        <p className="text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex justify-between gap-5 text-[#94A3B8]">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
