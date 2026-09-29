import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ProductPage } from './pages/ProductPage';
import { ResearchPage } from './pages/ResearchPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { CollaborationPage } from './pages/CollaborationPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary flex flex-col justify-between">
          <Navbar />
          <main className="w-full pt-16 bg-surface flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/collaboration" element={<CollaborationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to HomePage */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
