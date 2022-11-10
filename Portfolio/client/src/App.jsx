import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Description from "./Components/Description/Description.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    )
  }
}


ReactDOM.createRoot(document.getElementById("app")).render(<App />);
export default App;