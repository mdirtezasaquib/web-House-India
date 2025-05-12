
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home2 from './pages/Home2';
import Home from './pages/Home';


const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/" element={<Home2 />} />
        <Route path="/" element={<Home2 />} />

        {/* <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  
  );
};

export default App;
