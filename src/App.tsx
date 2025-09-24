import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomePage />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Services />
      <Footer />
    </div>
  );
}

function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Clients />
      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
