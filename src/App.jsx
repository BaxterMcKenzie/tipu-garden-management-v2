import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Links from "./components/Links";

const App = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <div className="custom-style">
          <ScrollToTop />
          <Navbar />
          <Links />
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;
