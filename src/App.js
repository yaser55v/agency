import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lorem from "./pages/lorem";
import SignIn from "./pages/sign";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign/" element={<SignIn />} />
        <Route path="/lorem/" element={<Lorem />} />
      </Routes>
    </Router>
  );
};

export default App;
