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
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {localStorage.setItem('state', JSON.stringify(darkMode))}, [darkMode])

  const handleChange = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem('state', JSON.stringify(!darkMode))
  };

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input 
          type="checkbox"
          className="checkbox"
          onChange={handleChange}
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
        <h1>
          Header
        </h1>
          <nav style={{ display: "flex", alignItems: 'stretch', padding: '0', background: '#2b2b2bff', color: '#eee'}}>
            <ul>
              <li><Link to="pages/home" style={{ marginRight: '1rem' }}> <button>Home</button></Link></li>
              <li><Link to="pages/guild_profile" style={{ marginRight: '1rem' }}><button>Guilds</button></Link></li>
              <li><Link to="pages/signup" style={{ marginRight: '1rem' }}><button>Sign Up</button></Link></li>
              <li><Link to="pages/user_profile" style={{ marginRight: '1rem'}}><button>User Profile</button></Link></li>
              <li><Link to="pages/graph_page" style={{ marginRight: '1rem'}}><button>Graphs</button></Link></li>
              <ToggleSwitch label=" " />
            </ul>
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

