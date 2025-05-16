import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Layouts
import { Layout } from './components/layout';

// Pages
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PackageDetail from './pages/PackageDetail';
import Packages from './pages/Packages';
import TravelGuide from './pages/TravelGuide';

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:packageId" element={<PackageDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
