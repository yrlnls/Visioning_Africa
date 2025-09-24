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
import CadastralEngineering from './components/projects/CadastralEngineering';
import PhysicalPlanningProjects from './components/projects/PhysicalPlanningProjects';
import GISMapping from './components/projects/GISMapping';
import EnvironmentalAssessment from './components/projects/EnvironmentalAssessment';
import OtherProjects from './components/projects/OtherProjects';

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

function CadastralEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <CadastralEngineering />
      <Footer />
    </div>
  );
}

function PhysicalPlanningProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <PhysicalPlanningProjects />
      <Footer />
    </div>
  );
}

function GISMappingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <GISMapping />
      <Footer />
    </div>
  );
}

function EnvironmentalAssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <EnvironmentalAssessment />
      <Footer />
    </div>
  );
}

function OtherProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <OtherProjects />
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
        <Route path="/projects/cadastral-engineering" element={<CadastralEngineeringPage />} />
        <Route path="/projects/physical-planning" element={<PhysicalPlanningProjectsPage />} />
        <Route path="/projects/gis-mapping" element={<GISMappingPage />} />
        <Route path="/projects/environmental-assessment" element={<EnvironmentalAssessmentPage />} />
        <Route path="/projects/other" element={<OtherProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
