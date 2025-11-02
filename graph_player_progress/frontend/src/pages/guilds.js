import {useState} from 'react'
import AutoSearchBar from '../components/AutoSearchBar';
import RectContainer from '../components/RectContainer';
import PageContainer from '../components/PageContainer';

function Guilds() {
  const [query, setQuery] = useState ("");
  const [results, setResults] = useState ([]);
  return (
    <PageContainer>
      <div
        style={{
          display: "inline",
          height: "100vh",
          flexDirection: "column",
          width: "100%",
          height: "auto"
        }}
      >
        <div style={{ justifyContent: "center", alignContent: "center", width: "auto", height: "auto"}}>
          <h6>Guild Look Up</h6>
        </div>
        <div>
            {<AutoSearchBar query={query} setQuery={setQuery}/>}
            <RectContainer height='auto' width='auto'>
              {/* <QueryListTable results={results} query={query} setQuery={setQuery}/> We will add these components later*/}
            </RectContainer>
        </div>
      </div>
    </PageContainer>
        
           
  );
}

export default Guilds;