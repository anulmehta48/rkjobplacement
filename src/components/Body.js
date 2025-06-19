import {
  Users,
  Award,
  Target,
  Globe,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
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
      icon: <Users size={40} className="text-blue-600" />,
      title: "Executive Search",
      description:
        "Finding top-tier executives and senior leadership talent across industries and geographies.",
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: "Professional Recruitment",
      description:
        "Comprehensive recruitment services for mid to senior-level professionals.",
    },
    {
      icon: <Target size={40} className="text-blue-600" />,
      title: "Talent Advisory",
      description:
        "Strategic talent consulting and workforce planning solutions for organizations.",
    },
    {
      icon: <Globe size={40} className="text-blue-600" />,
      title: "Global Talent Solutions",
      description:
        "International recruitment and talent acquisition across multiple markets.",
    },
  ];

  const testimonials = [
    {
      name: "David Chen",
      title: "CEO, Innovation Corp",
      quote:
        "RK JOB Placement delivered exceptional results. They understood our culture and found the perfect leadership team.",
    },
    {
      name: "Sarah Williams",
      title: "HR Director, Global Industries",
      quote:
        "Professional, efficient, and results-driven. RK JOB Placement exceeded our expectations in every way.",
    },
    {
      name: "Michael Johnson",
      title: "Founder, TechStart",
      quote:
        "Outstanding service and deep industry knowledge. They found us game-changing talent quickly.",
    },
  ];
  return (
    <div className="">
      {/*main Section */}
      <div
        id="home"
        className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-blue-800 rounded-full">
              Leading Executive Search & Talent Solutions
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white">
                Find Talent
              </button>
              <button className="px-8 py-4 text-lg border-blue-200 hover:bg-blue-50 bg-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                About RK JOB Placement
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
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                      15+
                    </div>
                    <div className="text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 font-medium">
                      Successful Placements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                      95%
                    </div>
                    <div className="text-gray-600 font-medium">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
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
      {/* Our Services Section */}
      <div id="services" className="py-20 lg:py-32 bg-slate-50">
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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders and innovative organizations
              worldwide.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition text-left"
                >
                  <div className="flex mb-4 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} fill="currentColor" className="w-5 h-5" />
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*Get into touch */}

      <section id="contact" className="py-16 bg-gray-50">
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
                src="https://wallpapers.com/images/hd/customer-support-contact-us-illustration-11aicfhwnyfusfzk.png"
                alt="Contact Us"
                className="max-h-52 object-contain mb-6"
              />
              <a
                href="https://forms.gle/5QnBku5SRv4yvTDr7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Contact Now
              </a>
            </div>

            {/* Contact Info */}
            <div id="contact" className="">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Mail className="text-blue-600" />
                  <div>
                    <strong>Email</strong>
                    <br />
                    info@rkjobplacement.com
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-blue-600" />
                  <div>
                    <strong>Phone</strong>
                    <br />
                    +91 7845128956
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-blue-600" />
                  <div>
                    <strong>Address</strong>
                    <br />
                    123 Executive Plaza
                    <br />
                    Suite 500
                    <br />
                    New Delhi 405214
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
