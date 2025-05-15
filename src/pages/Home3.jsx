import { Link } from "react-router-dom";
import { FaArrowRight, FaLaptop, FaShoppingCart, FaBriefcase, FaMobileAlt, FaPalette, FaGoogle } from "react-icons/fa";

const services = [
  {
    title: "Website Design",
    desc: "We design dynamic website which are fully responsive & easy to maintain.",
    iconBg: "bg-blue-600",
    icon: <FaLaptop size={24} />,
    link: "/website-design",
  },
  {
    title: "eCommerce Website",
    desc: "We develop custom ecommerce website design for our clients which sells.",
    iconBg: "bg-orange-500",
    icon: <FaShoppingCart size={24} />,
    link: "/ecommerce",
  },
  {
    title: "Web App Development",
    desc: "We build custom ecommerce websites which are best in class with all the features.",
    iconBg: "bg-blue-600",
    icon: <FaBriefcase size={24} />,
    link: "/web-app",
  },
  {
    title: "Mobile Application",
    desc: "Our expert developer make hybrid, cross, native mobile apps for android & iOS.",
    iconBg: "bg-orange-500",
    icon: <FaMobileAlt size={24} />,
    link: "/mobile-app",
  },
  {
    title: "SEO/SEM",
    desc: "Our team uses modern seo services, backed by the best digital marketing practices.",
    iconBg: "bg-blue-500",
    icon: <FaGoogle size={24} />,
    link: "/digital-marketing",
  },
  {
    title: "UI/UX Designing",
    desc: "We design awesome app wireframes, logos, social media post.",
    iconBg: "bg-orange-500",
    icon: <FaPalette size={24} />,
    link: "/ui-ux",
  },
];

export default function Home3() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center px-4 lg:px-20 xl:px-24">
       <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-2">
       What We Do - Our Core Services
        </h2>

        <p className="text-gray-600 mb-10">
          We provide innovative web technology services for{" "}
          <span className="font-semibold">startups, companies, large & small businesses</span>. We always deliver best in class results for the clients at affordable cost.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.slice(0, 4).map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>


        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {services.slice(4, 6).map((service, index) => (
            <SimpleCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 hover:-translate-y-3 transition-all duration-300 p-6 w-full sm:w-64 h-80 flex flex-col justify-between hover:bg-[#EBFDFD]">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${service.iconBg} text-white text-2xl mx-auto mb-4`}>
        {service.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm text-center">{service.desc}</p>
      </div>
      <Link to={service.link} className="text-blue-600 font-medium inline-flex items-center justify-center">
        Read More <FaArrowRight className="ml-2" />
      </Link>
    </div>
  );
}


function SimpleCard({ service }) {
  return (
    <div className="rounded-xl shadow-xl hover:shadow-2xl p-6 w-full sm:w-64 h-80 flex flex-col justify-between border border-gray-200 hover:-translate-y-3 transition-all duration-300 hover:bg-[#EBFDFD]">
      <div className="flex flex-col items-center">
        <div className={`w-14 h-14 flex items-center justify-center rounded-full ${service.iconBg} text-white text-2xl mb-4`}>
          {service.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm text-center">{service.desc}</p>
      </div>
       <Link to={service.link} className="text-blue-600 font-medium inline-flex items-center justify-center">
        Read More <FaArrowRight className="ml-2" />
      </Link>

    </div>
  );
}
