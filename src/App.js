
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";
import Register from "./Register";
import Contact from "./Contact";
import About from "./About";
function App() {
  return (
    <BrowserRouter>
    
  
      <Routes>
        
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
