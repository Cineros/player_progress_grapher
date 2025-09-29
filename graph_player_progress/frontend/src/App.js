<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
import Toggle from "react-toggle";

export const toggleDarkMode = () => {
  const [isDark, setIsDark] = userState(true);
    return(
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    );
};



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
      <Router>
          <nav style={{ display: "flex", padding: '1rem', background: '#555c72ff' }}>
            <Link to="pages/home" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="pages/guild_profile" style={{ marginRight: '1rem' }}>Guilds</Link>
            <Link to="pages/signup" style={{ marginRight: '1rem' }}>Sign Up</Link>
            <Link to="pages/user_profile" style={{ marginRight: '1rem'}}>User Profile</Link>
            <Link to="pages/graph_page" style={{ marginRight: '1rem'}}>Graphs</Link>
            <toggleDarkMode />
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
>>>>>>> refs/remotes/origin/frontend
