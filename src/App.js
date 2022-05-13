import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Cv from "./Components/Cv.js"; //komponent
import Portfolio from "./Components/Portfolio.js";
import Navbar from "./Components/navbar.js";
import "./index.css";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </div>
      </>
  );
}
function Home(){
  return(
  <>
  <div className="App">
  <h1>Home</h1>
  <p>text</p>
  </div>
  </>
);
}



export default App;
