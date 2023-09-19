import "./App.css";
import Main from "./Component/main/Main";
import Sectionfive from "./Component/firstscreen/Sectionfive";
import {Routes, Route } from "react-router-dom";
import Sectionsix from "./Component/secondscreen/Sectionsix";


function App() {
  return (
    
      <>
      <Routes>

      <Route path="/" element={<Main />} exact />
      
      <Route path="/firstscreen" element={<Sectionfive />} exact />

      <Route path="/secondscreen" element={<Sectionsix />} exact />

      </Routes>
      
      </>
   
  );
}

export default App;
