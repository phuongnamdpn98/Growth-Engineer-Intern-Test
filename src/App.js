import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Instruction from "./components/Instruction";
import Question from "./components/Question";
import GaugeResult from "./components/GaugeResult";
import ShareResult from "./components/ShareResult";
import ShareEmail from "./components/ShareEmail";

import './scss/main.scss';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instruction" element={<Instruction/>} />
        <Route path="/question" element={<Question/>}/>
        <Route path="/result" element={<GaugeResult />} />
        <Route path="/share" element={<ShareResult  />} />
        <Route path="/email" element={<ShareEmail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
