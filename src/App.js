import React from "react";
import Home from "./Home";
import Descricao from "./pages/descricao";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

   return (
    <div>

      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/descricao" element={<Descricao />} />

     </Routes>

      
    </div>
  );
};

export default App;
