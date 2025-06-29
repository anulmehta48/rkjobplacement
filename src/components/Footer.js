const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">R.K. Job Placement Services</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Premier executive search and talent solutions firm connecting
              exceptional leaders with forward-thinking organizations worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Executive Search</li>
              <li>Professional Recruitment</li>
              <li>Talent Advisory</li>
              <li>Global Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} R.K. Job Placement Services. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
