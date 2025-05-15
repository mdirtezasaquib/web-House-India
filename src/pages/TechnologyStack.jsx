import { FaNodeJs } from "react-icons/fa";
import { SiLaravel, SiReact, SiMysql, SiVuedotjs } from "react-icons/si";

export default function TechnologyStack() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Side Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Stack</h2>

          <p className="text-gray-600 mb-4">
            Webhouseindia have an in-house team of technical experts to help you bring your designs to reality, whether your have a website project, custom web application or android app.
          </p>
          <p className="text-gray-600 mb-8">
            We always use modern technology to design and develop most advanced and agile platform for businesses and startups. We are expertise in{" "}
            <span className="font-semibold">
              Laravel, Wordpress, Bootstrap, Reactjs, Nodejs, Vuejs, Angular, Cakephp,
              MongoDB, MySQL, Digitalocean, AWS, Azure etc
            </span>
          </p>

          {/* Bottom Left Icons (2 Cards) */}
          <div className="flex gap-6 mt-6">
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:scale-105 transition w-32 h-32">
              <FaNodeJs size={50} className="text-green-500" />
              <p className="mt-2 text-sm font-medium">NodeJs</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:scale-105 transition w-32 h-32">
              <SiLaravel size={50} className="text-red-500" />
              <p className="mt-2 text-sm font-medium">Laravel</p>
            </div>
          </div>
        </div>

        {/* Right Side Vertical Icons (3 Cards) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:scale-105 transition w-32 h-32">
            <SiVuedotjs size={50} className="text-green-400" />
            <p className="mt-2 text-sm font-medium">VueJs</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:scale-105 transition w-32 h-32">
            <SiReact size={50} className="text-blue-400" />
            <p className="mt-2 text-sm font-medium">ReactJs</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:scale-105 transition w-32 h-32">
            <SiMysql size={50} className="text-blue-500" />
            <p className="mt-2 text-sm font-medium">MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
