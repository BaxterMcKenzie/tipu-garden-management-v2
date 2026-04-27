import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import OurWork from "../pages/OurWork";
import ProjectPage from "../pages/ProjectPage";

const Links = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/our-work/:slug" element={<ProjectPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Links;