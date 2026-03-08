import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { PathwaysPage } from './pages/PathwaysPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { TutorPage } from './pages/TutorPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { Privacy } from './pages/Privacy';

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
            <Route path="/tutor" element={<TutorPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
