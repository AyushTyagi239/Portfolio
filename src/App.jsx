
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UseCaseSection from './components/UseCasesSection';
import Footer from './components/Footer';
import './styles/global.css';
import DarkVeil from './components/DarkVeil'
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <DarkVeil/>
      
      <UseCaseSection />
      <Footer />
    </div>
    
  );
}

export default App;
