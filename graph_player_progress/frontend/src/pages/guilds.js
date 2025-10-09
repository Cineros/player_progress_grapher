import {useState} from 'react'
import AutoSearchBar from '../components/AutoSearchBar';

function Guilds() {
  const [query, setQuery] = useState ("");
  const [results, setResults] = useState ([]);
  return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
            <div style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50% )",
             fontSize: '2em'
          }}>
          <span style={ {color: "#4285F4"}}>G</span>
          <span style={{color: "#EA4335"}}>o</span>
          <span style={{color: "#FBBC05"}}>o</span>
          <span style={{color: "#4285F4"}}>g</span>
          <span style={{color: "#34A853"}}>l</span>
          <span style={{color: "#EA4335"}}>e</span>
          <span style={{color: "#FBBC05"}}>p</span>
          <span style={{color: "#34A853"}}>l</span>
          <span style={{color: "#4285F4"}}>e</span>
          <span style={{color: "#EA4335"}}>x</span>
        </div> 
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50% )",
            }}
          >
             {<AutoSearchBar query={query} setQuery={setQuery}/>}
           {/* <QueryListTable results={results} query={query} setQuery={setQuery}/> We will add these components later*/}
          </div>
        </div>   
  );
}

export default Guilds;