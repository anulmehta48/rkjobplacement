import { LOGO_IMG } from "../config";
const Title = () => {
  return (
    <div>
      <a href="/">
        <img className="w-24" src={LOGO_IMG} alt="logo" />
      </a>
      {/* <h1 className="text-sm ">RK PLACEMENT SERVICES</h1> */}
    </div>
  );
};
const Header = () => {
  return (
    <div className="bg-white shadow-2xs  sticky top-0  flex-wrap z-[30]">
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
              <a href="mailto:abc@gmail.com">
                <button className=" px-8 py-4 text-lg bg-blue-600 text-white cursor-pointer ">
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