import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { HomePage } from './pages/HomePage';
import { PathwaysPage } from './pages/PathwaysPage';
import { ApplicationPage } from './pages/ApplicationPage';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <BackgroundOrbs />
        <Navigation />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pathways" element={<PathwaysPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
