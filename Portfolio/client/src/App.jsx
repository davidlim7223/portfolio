import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Description from "./Components/Description/Description.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Timeline from "./Components/Timeline/Timeline.jsx";
import Contact from "./Components/ContactMe/Contact.jsx";
import FunFacts from "./Components/FunFacts/FunFacts.jsx";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar />
        </BrowserRouter>
        <Description />
        <AboutMe />
        <Timeline />
        <FunFacts />
        <Contact />
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById("app")).render(<App />);
export default App;