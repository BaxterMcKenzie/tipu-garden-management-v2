import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import OurWork from "../pages/OurWork";

const Links = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourWork" element={<OurWork />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Links;
