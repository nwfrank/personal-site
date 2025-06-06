import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Compounds/NavBar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
