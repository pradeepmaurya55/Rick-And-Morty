import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterDetails from "./pages/CharacterDetails";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
