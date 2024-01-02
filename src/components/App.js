import React from "react";
import "./../styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
