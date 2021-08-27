import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anyara from "./pages/anyara";
import SignIn from "./pages/sign";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign/" element={<SignIn />} />
        <Route path="/anyara/" element={<Anyara />} />
      </Routes>
    </Router>
  );
};

export default App;
