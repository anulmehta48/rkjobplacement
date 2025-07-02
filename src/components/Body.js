import { Main_IMG_1, Main_IMG_2, Main_IMG_3, Main_IMG_4 } from "../config";
import ImageCrousel from "./Crousel";
// import Testimonial from "./public/rkjobplacement.pdf"
import {
  NotebookPen,
  IndianRupee,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  ChartNoAxesCombined,
  HeartHandshake,
  IdCardLanyard,
  Blocks,
  Boxes,
  SquareChartGantt,
  Stethoscope,
  FileUser,
} from "lucide-react";
const Body = () => {
  const features = [
    "Comprehensive candidate assessment and evaluation",
    "Industry expertise across multiple sectors",
    "Global network of talent professionals",
    "Customized recruitment strategies",
    "End-to-end recruitment process management",
    "Post-placement support and follow-up",
  ];

  const services = [
    {
      icon: <NotebookPen size={40} className="text-[#fc9704]" />,
      title: "Detailed Project Reports",
      description:
        "We prepare comprehensive project reports with clear data and analysis to guide your healthcare initiatives effectively.",
    },
    {
      icon: <ChartNoAxesCombined size={40} className="text-[#fc9704]" />,
      title: " Feasibility Analysis",
      description:
        "Our feasibility studies assess your project’s practicality, ensuring it is achievable and beneficial in the current market..",
    },
    {
      icon: <IndianRupee size={40} className="text-[#fc9704]" />,
      title: "Financial Projections",
      description:
        "We deliver accurate financial forecasts to help you plan budgets and manage resources efficiently for long-term success.",
    },
    {
      icon: <HeartHandshake size={40} className="text-[#fc9704]" />,
      title: "Business Development Support",
      description:
        "Our team provides strategic support to grow and expand your medical business with confidence and clarity",
    },
    {
      icon: <IdCardLanyard size={40} className="text-[#fc9704]" />,
      title: " Manpower Planning",
      description:
        "We analyze your staffing needs and structure roles effectively to ensure optimal performance in your healthcare facility.",
    },
    {
      icon: <Blocks size={40} className="text-[#fc9704]" />,
      title: "Project Development",
      description:
        "From concept to execution, we guide you through every stage of medical project development to achieve operational excellence.",
    },
    {
      icon: <Boxes size={40} className="text-[#fc9704]" />,
      title: "Operational Process Management & Support",
      description:
        "We streamline processes and provide ongoing support to improve efficiency and maintain high-quality healthcare services.",
    },
    {
      icon: <SquareChartGantt size={40} className="text-[#fc9704]" />,
      title: "Vendor & Inventory Management",
      description:
        "Our team manages vendor relationships and inventory systems, ensuring you always have essential supplies without overspending.",
    },
    {
      icon: <Stethoscope size={40} className="text-[#fc9704]" />,
      title: "Doctor Searching & Engagement",
      description:
        "We identify and connect you with qualified doctors tailored to your clinic or hospital’s specific requirements and goals.",
    },
    {
      icon: <FileUser size={40} className="text-[#fc9704]" />,
      title: "Medical Staff Planning, Budgeting & Consulting",
      description:
        "We offer strategic planning and budgeting support to hire and manage medical staff within your financial and operational targets.",
    },
  ];

  const testimonials = [
    {
      name: "Pachri",
      title: "Pachri (Rajasthan)",
      quote:
        "https://singhaniauniversity.ac.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-25-at-5.45.22-PM.jpeg",
    },
    {
      name: "Jodhpur",
      title: "Jodhpur (Rajasthan)",
      quote: "https://vyasmedicalcollege.com/images/vyaslogo.png",
    },
    {
      name: "Shamgarh",
      title: "Shamgarh (M.P.)",
      quote: "https://www.sardarpatelhospital.com/images/logo_header.png",
    },
    {
      name: "Sikar",
      title: "Sikar (Rajasthan)",
      quote:
        "https://dhayalhospital.com/assets/user/images/resources/logo-web.jpg",
    },
    {
      name: "Dausa",
      title: "Sikar,(Rajasthan)",
      quote:
        "https://navjeevanhospitallalsot.com/wp-content/uploads/2023/09/IMG-20230904-WA0078-removebg-preview-1.png",
    },
    {
      name: "Sri Ganganager",
      title: "Sikar,(Rajasthan)",
      quote:
        "https://www.drsstantiamch.org/web_assets/assets/img/jansewa_logo-1.png",
    },
    {
      name: "Mumbai",
      title: "Sikar,(Rajasthan)",
      quote:
        "https://galaxyhospital.co.in/wp-content/uploads/2023/07/Galaxy-Hospital.png",
    },
    {
      name: "Sikar",
      title: "Sikar,(Rajasthan)",
      quote:
        "https://image1.jdomni.in/storeLogo/12092023/5A/67/FD/6454EFF49F3729678224E174A5_1694523946046.png?output-format=webp",
    },
    {
      name: "Pali",
      title: "Sikar,(Rajasthan)",
      quote: "https://bmhosp.org/images/logo.png",
    },
  ];
  return (
    <div className="">
      {/*main Section */}
      <div id="home" className="bg-[#faf9f4]  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center">
            <h1 className="mb-6 text-blue-800 rounded-full">
              R. K. JOB PLACEMENT SERVICE
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Executive Search &
              <br />
              <span className="text-blue-600">Talent Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              We connect exceptional leaders with forward-thinking
              organizations. Our expertise in executive search and talent
              advisory drives sustainable growth and success.
            </p>
          </div> */}
          <div className=" ">
            <img src={Main_IMG_1} className="" alt="png" />
          </div>
          <div className="flex flex-col  md:gap-2 md:flex  sm:flex-row md:space-x-80 justify-center">
            <a
              href="https://forms.gle/efyZeoQyKt7hccyVA"
              target="_self"
              rel="noopener"
            >
              <button className="px-36 md:px-16 py-3 text-lg font-bold bg-[#fc9704] hover:bg-[#0279ba] text-white cursor-pointer">
                Jobseeker
              </button>
            </a>
            <br/>
            <a href="https://forms.gle/cDLX17SjyuZwamWX9">
              <button className="px-36 md:px-16 py-3 text-lg font-bold border-blue-200 hover:bg-[#0279ba] bg-[#fc9704] text-white cursor-pointer">
                Employer&nbsp;
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <ImageCrousel/> */}
      {/* About Section */}
      <div id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl  font-bold text-gray-900 mb-8">
                R. K. JOB PLACEMENT SERVICE
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RK JOB Placement is a premier executive search and talent
                solutions firm dedicated to connecting exceptional leaders with
                organizations that value excellence and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With decades of combined experience, our team specializes in
                identifying, attracting, and placing top-tier talent across
                industries and geographies.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#fc9704] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#faf9f4] rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-[#fc9704] mb-2">
                      15+
                    </div>
                    <div className="text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-[#fc9704] mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 font-medium">
                      Successful Placements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-[#fc9704] mb-2">
                      95%
                    </div>
                    <div className="text-gray-600 font-medium">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-[#fc9704] mb-2">
                      25
                    </div>
                    <div className="text-gray-600 font-medium">
                      Countries Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-auto px-4  lg:px-8">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Photo's
        </h1>
        <div className="md:flex md:justify-center gap-8 ">
          <img
            src={Main_IMG_4}
            alt=""
            className="w-[500px] md:w-[300px]  h-[250px] py-3"
          />
          <img
            src={Main_IMG_2}
            alt=""
            className="w-[500px] md:w-[300px]  h-[250px] py-3"
          />
          <img
            src={Main_IMG_3}
            alt=""
            className="w-[500px] md:w-[300px]  h-[250px] py-3"
          />
        </div>
      </div>
      {/* Our Services Section */}
      <div id="services" className="py-20 lg:py-32 bg-[#faf9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive talent solutions designed to meet your
              organization's unique needs and drive sustainable growth.
            </p>
          </div>
          <div className="md:mt-12 md:grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white  p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#666162] p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-md text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tesimonials  */}
      <div className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders and innovative organizations
              worldwide.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-[#faf9f4] p-6 justify-center rounded-2xl shadow hover:shadow-md transition text-left py-12 "
                >
                  <img src={t.quote} className="h-40 w-80 object-contain" />
                  <h4 className="font-bold text-center text-2xl text-gray-900">
                    {t.name}
                  </h4>
                  {/* <p className="text-sm text-gray-500">{t.title}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-xl font-bold mb-5">
            Download Our Testimonial Letter
          </h2>
          <a href="/testimonial.pdf" download="Testimonial.pdf">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Download Testimonial
            </button>
          </a>
        </div>
      </div> */}

      {/*Get into touch */}
      <section id="contact" className="py-16 bg-[3faf9f4]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mt-2">
              Ready to find exceptional talent or explore new opportunities?
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Image + Button */}
            <div className="bg-white p-6 rounded-2xl shadow h-[480px] flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/ds3kl5cs2/image/upload/v1750698043/d062ca90-d59c-4d6c-b13b-5f9acd48fee6_jiqec4.png"
                alt="Contact Us"
                className=" object-contain mb-6"
              />
              {/* <a
                href="https://forms.gle/8KvoZbX8ifixMNHc8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Contact Now
              </a> */}
            </div>

            {/* Contact Info */}
            <div id="contact" className="">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Mail className="text-[#fc9704]" />
                  <div>
                    <strong>Email</strong>
                    <br />
                    rkjobpl7@gmail.com
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-[#fc9704]" />
                  <div>
                    <strong>Phone</strong>
                    <br />
                    +91 8905406622, 8278645350, 7837332642
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#fc9704]" />
                  <div>
                    <strong>Address</strong>
                    <br />
                    1st Office : 49, Gurunanakpura, Raja park, Jaipur (Raj.)
                    302004.
                    <br />
                    2nd Office : VrindavanNagar, Krishnapuri,
                    Madanganj-Kishangarh, Dist-Ajmer (Raj.) 305801.
                  </div>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mt-10 mb-2">Office Hours</h4>
              <div className="text-gray-700 space-y-1">
                <p>
                  Monday - Friday: <strong>9:00 AM - 6:00 PM</strong>
                </p>
                <p>
                  Saturday: <strong>10:00 AM - 2:00 PM</strong>
                </p>
                <p>
                  Sunday: <strong>Closed</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
