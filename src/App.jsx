
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UseCaseSection from './components/UseCasesSection';
import Footer from './components/Footer';
import './styles/global.css';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <HeroSection />
      <UseCaseSection />
      <Footer />
    </div>
    
  );
}

export default App;
