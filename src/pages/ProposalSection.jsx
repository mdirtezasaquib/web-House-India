import { FiSend } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";


export default function ProposalSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Are You Ready to Grow Your Business Online With <br className="hidden md:block" />
        <span className="text-white">#1 Website Development Company in Patna ?</span>
      </h2>

      <p className="text-base md:text-lg mb-8 text-white/80">
        Click the button below for a free proposal
      </p>

      <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition">
        <FiSend className="w-5 h-5" />
        Get Free Website Proposal/Quotation  <FaArrowRight className="ml-2" />
     
      </button>
    </section>
  );
}
