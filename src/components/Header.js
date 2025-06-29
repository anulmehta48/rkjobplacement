import { LOGO_IMG } from "../config";
const Title = () => {
  return (
    <div className="flex"> 
      <a href="/">
        <img className=" w-20  " src={LOGO_IMG} alt="logo" />
      </a>
      <h1 className="text-3xl mt-5  text-[#484746]">Job Placement Services</h1>
    </div>
  );
};
const Header = () => {
  return (
    <div className="bg-[#faf9f4] shadow-2xs  sticky top-0  flex-wrap z-[30]">
      <div className="max-w-7xl mx-auto ">
        <div className=" flex justify-between ">
          <Title />
          <div className="">
            <ul className="flex gap-6 ">
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
                <button className="px-8 py-2.5 text-lg mt-3 bg-[#f48734] text-white cursor-pointer">
                  Get Started
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
