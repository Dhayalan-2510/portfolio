import React, { useEffect } from 'react';
import MouseTrail from './components/MouseTrail';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  useEffect(() => {
    // Update document title with SEO keywords
    document.title = `${portfolioData.personal_info.name} - ${portfolioData.seo_keywords.slice(0, 3).join(', ')}`;
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', portfolioData.personal_info.bio);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = portfolioData.personal_info.bio;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', portfolioData.seo_keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = portfolioData.seo_keywords.join(', ');
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <MouseTrail />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;