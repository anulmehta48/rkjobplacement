
import { LOGO_IMG } from "../config";
const Title = () => {
  return (
    <div className="flex justify-center items-center mx-auto ">
      <a href="/">
        <img className="w-16 md:w-20 " src={LOGO_IMG} alt="logo" />
      </a>
      <h1 className="text-xl md:text-3xl font-semibold text-[#0279ba] mr-1">
        Job Placement Services
      </h1>
      <a href="mailto:rkjobpl7@gmail.com">
        <button className="md:hidden px-8 py-3 rounded-3xl bg-[#fc9704] hover:bg-[#0279ba] text-white cursor-pointer ">
          Email
        </button>
      </a>
    </div>
  );
};
const Header = () => {
  return (
    <div className="bg-[#faf9f4] shadow-2xs  sticky top-0 z-[30] flex-wrap   ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <Title />
          <div className="">
            <ul className="hidden md:flex gap-6  ">
              <a href="#home">
                <li className="p-5 cursor-pointer">Home</li>
              </a>
              <a href="#about">
                <li className="p-5 cursor-pointer">About</li>
              </a>
              <a href="#services">
                <li className="p-5 cursor-pointer">Services</li>
              </a>
              <a href="#contact">
                <li className="p-5 cursor-pointer">Contact</li>
              </a>
              <a href="mailto:rkjobpl7@gmail.com">
                <button className="email-button px-8 py-2.5 text-lg mt-3 bg-[#fc9704] hover:bg-[#0279ba] text-white cursor-pointer ">
                  Email Us
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
