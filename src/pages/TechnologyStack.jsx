import { FaNodeJs } from "react-icons/fa";
import { SiLaravel, SiReact, SiMysql, SiVuedotjs } from "react-icons/si";

export default function TechnologyStack() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        
        <div className="w-full lg:w-1/2">
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

        
          <div className="flex gap-8 mt-6">
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-8 hover:scale-105 transition w-40 h-40 hover:bg-blue-600">
              <FaNodeJs size={60} className="text-green-500" />
              <p className="mt-3 text-base font-medium">NodeJs</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-8 hover:scale-105 transition w-40 h-40  hover:bg-orange-500">
              <SiLaravel size={60} className="text-red-500" />
              <p className="mt-3 text-base font-medium">Laravel</p>
            </div>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px]">

          <div className="absolute top-0 left-0">
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-8 hover:scale-105 transition w-40 h-40">
              <SiVuedotjs size={60} className="text-green-400" />
              <p className="mt-3 text-base font-medium">VueJs</p>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-8 hover:scale-105 transition w-40 h-40">
              <SiReact size={60} className="text-blue-400" />
              <p className="mt-3 text-base font-medium">ReactJs</p>
            </div>
          </div>


          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-8 hover:scale-105 transition w-40 h-40">
              <SiMysql size={60} className="text-blue-500" />
              <p className="mt-3 text-base font-medium">MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
