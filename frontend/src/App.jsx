import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </Router>
  );
}

export default App;
