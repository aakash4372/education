import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyOffcanvas from './Pages/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Pages/Home';
import ContactSection from './Pages/Contact';
import Footer from './Pages/Footer';
import CardLayout from './Pages/service';
import ScrollToTop from './Pages/Top';
import FloatingIcons from './Pages/Floatingicon';


const Layout = ({ children }) => (
  <>
    <MyOffcanvas /> 
    {children}
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/service" element={<Layout><CardLayout/></Layout>} />
        <Route path="/contact" element={<Layout><ContactSection/></Layout>} />
      </Routes>
      <FloatingIcons/>
      <Footer/>
    </Router>
  );
}
