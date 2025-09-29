import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Guilds from "./pages/guild_profile";
import UserProfile from "./pages/user_profile";
import Graphs from "./pages/graph_page";

const ToggleSwitch = ({ label }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input 
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
        >
        </input>
        <label
          className="label"
          htmlFor={label}        
        >
           <span className="inner" />
           <span className="switch" />
        </label>
      </div>
    </div>
  );
};


function App() {

  return (
      <Router>
          <nav style={{ display: "flex", padding: '1rem', background: '#b4bbcfff'}}>
            <Link to="pages/home" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="pages/guild_profile" style={{ marginRight: '1rem' }}>Guilds</Link>
            <Link to="pages/signup" style={{ marginRight: '1rem' }}>Sign Up</Link>
            <Link to="pages/user_profile" style={{ marginRight: '1rem'}}>User Profile</Link>
            <Link to="pages/graph_page" style={{ marginRight: '1rem'}}>Graphs</Link>
            <ToggleSwitch label=" " />
          </nav>

        <Routes>
          <Route path="pages/home" element={<Home />} />
          <Route path="pages/guild_profile" element={<Guilds />} />
          <Route path="pages/signup" element={<SignUp />} />
          <Route path="pages/user_profile" element={<UserProfile />} />
          <Route path="pages/graph_page" element={<Graphs />} />
        </Routes>
      </Router>
  );
}

export default App;

