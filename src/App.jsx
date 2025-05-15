
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home2 from './pages/Home2';
import Home from './pages/Home';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import Home6 from './pages/Home6';
import TrustedBrand from './pages/TrustedBrand';
import Footer from './components/Footer';
import TechnologyStack from './pages/TechnologyStack';
import ProposalSection from './pages/ProposalSection';


const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/" element={<Home4 />} />
        <Route path="/" element={<Home5 />} />
        <Route path="/" element={<Home6 />} />
        <Route path="/" element={<TrustedBrand />} />
        <Route path="/" element={<TechnologyStack/>} />
        <Route path="/" element={<ProposalSection/>} />



        {/* <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>

      <Footer/>
    </Router>
  
  );
};

export default App;
