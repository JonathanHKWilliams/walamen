import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AboutOverview from './pages/AboutOverview';
import AboutTeam from './pages/AboutTeam';
import AboutVisionValues from './pages/AboutVisionValues';
import Careers from './pages/Careers';
import CareersLife from './pages/CareersLife';
import CareersOpenings from './pages/CareersOpenings';
import CareersStudents from './pages/CareersStudents';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import WhatWeDo from './pages/WhatWeDo';
import WhatWeDoEngineering from './pages/WhatWeDoEngineering';
import WhatWeDoArchitecture from './pages/WhatWeDoArchitecture';
import WhatWeDoTechnology from './pages/WhatWeDoTechnology';
import WhatWeDoAIData from './pages/WhatWeDoAIData';
import WhatWeDoStrategy from './pages/WhatWeDoStrategy';
import WhatWeDoTransformation from './pages/WhatWeDoTransformation';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route index element={<AboutOverview />} />
            <Route path="overview" element={<AboutOverview />} />
            <Route path="team" element={<AboutTeam />} />
            <Route path="vision-values" element={<AboutVisionValues />} />
          </Route>
          <Route path="/careers" element={<Careers />}>
            <Route index element={<CareersLife />} />
            <Route path="life" element={<CareersLife />} />
            <Route path="openings" element={<CareersOpenings />} />
            <Route path="internships" element={<CareersStudents />} />
          </Route>
          <Route path="/what-we-do" element={<WhatWeDo />}>
            <Route index element={<WhatWeDoEngineering />} />
            <Route path="engineering" element={<WhatWeDoEngineering />} />
            <Route path="architecture" element={<WhatWeDoArchitecture />} />
            <Route path="technology" element={<WhatWeDoTechnology />} />
            <Route path="ai-data" element={<WhatWeDoAIData />} />
            <Route path="strategy" element={<WhatWeDoStrategy />} />
            <Route path="transformation" element={<WhatWeDoTransformation />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;