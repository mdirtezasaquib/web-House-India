import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiDigitalocean, SiNorton, SiLetsencrypt, SiMcafee } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b1e3d] to-[#0b1e3d] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        

        <div>
          <h3 className="text-xl font-semibold mb-4">Helpful Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>› Home</li>
            <li>› About Us</li>
            <li className="flex items-center gap-1">› Why Choose us? <span className="bg-red-500 text-xs px-2 py-0.5 rounded">Latest</span></li>
            <li>› How We Work?</li>
            <li>› FAQs</li>
            <li>› Terms & Conditions</li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>› Website Design</li>
            <li>› Ecommerce Website</li>
            <li>› Web Application</li>
            <li>› Mobile Application</li>
            <li>› UI/UX Designing</li>
            <li>› SEO / SEM</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-1">› Work Portfolio <span className="bg-green-500 text-xs px-2 py-0.5 rounded">New</span></li>
            <li className="flex items-center gap-1">› Client Reviews <span className="bg-yellow-500 text-xs px-2 py-0.5 rounded">Latest</span></li>
            <li className="flex items-center gap-1">› Careers <span className="bg-blue-500 text-xs px-2 py-0.5 rounded">Hiring</span></li>
            <li className="flex items-center gap-1">› Contact Us <span className="bg-orange-500 text-xs px-2 py-0.5 rounded">Locate us</span></li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2"><FaLocationArrow /> Building No.-159, 3rd Floor, Bhagwat Nagar, Kumhrar, Patna, Bihar - 800026</li>
            <li className="flex items-center gap-2"><FaPhone /> +91 9709796347 (India)</li>
            <li className="flex items-center gap-2"><FaPhone /> +974 31552635 (Doha, Qatar)</li>
            <li className="flex items-center gap-2"><FaEnvelope /> Info@WebhouseIndia.com</li>
            <li className="flex items-center gap-2"><FaEnvelope /> Support@WebhouseIndia.com</li>
          </ul>
        </div>

      </div>

      
      <div className="border-t border-white/20 py-4 mt-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-10">
        
        <div className="flex items-center space-x-4 text-sm">
          <span>Trusted by</span>
          <SiNorton className="text-yellow-400" size={24} />
          <SiLetsencrypt className="text-green-400" size={24} />
          <SiMcafee className="text-red-500" size={24} />
        </div>

        <div className="text-center text-sm mt-3 md:mt-0">
          © 2025 | Made with <span className="text-red-500">Saquib ❤</span> in India
        </div>

        <div className="flex items-center space-x-2 text-sm mt-3 md:mt-0">
          <span>Powered By</span>
          <SiDigitalocean className="text-blue-400" size={24} />
        </div>

      </div>
    </footer>
  );
}
