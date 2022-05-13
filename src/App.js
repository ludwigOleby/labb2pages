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
  <article>
        <h2>Presentation</h2>
        <h3>Hej!</h3>
        <p>Jag heter Ludwig Oleby och jag är 30 år gammal, jag bor i Varberg
        där jag studerar till systemutvecklare.<br></br>
        Innan jag påbörjade min utbildning så har jag arbetat inom butikverksamhet främst som säljare men även med andra uppgifter.<br></br>
        Jag har spenderat ett år i Australien där jag har utbildat mig till personlig tränare och innan dess bodde jag och arbetade ett par år i Oslo.<br></br>
        På min fritid så gillar jag att styrketräna, umgås med vänner, utveckla egna projekt och spela tv/datorspel.
        </p>
    </article>
    <footer role ="contentinfo">
        <p className ="copyright">Copyright © Ludwig Oleby 2022</p>
    </footer>
  </div>
  </>
);
}



export default App;
