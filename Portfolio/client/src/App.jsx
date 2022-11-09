import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Description from "./Components/Description/Description.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <div id="bodyWrapper">
        <Routes>
          <Route path="/" element={<Description />} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}


ReactDOM.createRoot(document.getElementById("app")).render(<App />);
export default App;