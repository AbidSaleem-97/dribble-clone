import "./App.css";
import Main from "./Component/main/Main";
import Sectionfive from "./Component/firstscreen/Sectionfive";
import {Routes, Route } from "react-router-dom";
import Sectionsix from "./Component/secondscreen/Sectionsix";
import Sectionseven from "./Component/learn-design/Sectionseven";
import Sectioneight from "./Component/jobs/Sectioneight";
import Sectionnine from "./Component/pro/Sectionnine";


function App() {
  return (
    
      <>
      <Routes>

      <Route path="/" element={<Main />} exact />
      
      <Route path="/firstscreen" element={<Sectionfive />} exact />

      <Route path="/secondscreen" element={<Sectionsix />} exact />

      <Route path="/learn-design" element={<Sectionseven />} exact />

      <Route path="/jobs" element ={<Sectioneight />} exact />

      <Route path="/pro" element ={<Sectionnine />} exact />

      </Routes>
      
      </>
   
  );
}

export default App;
