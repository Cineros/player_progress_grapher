import React from 'react';
import Blog from '../components/Blog.js';
import RectContainer from '../components/RectContainer.js';
import LeaderBoard from '../components/LeaderBoard.js';
import News from '../components/News.js';
import Updates from '../components/Updates.js';



function Home(){
    return(
            <div>
                <h2>
                    Welcome to the Player Progress Graphing WebApp
                </h2>
                <div style={{ display: "flex "}}>
                    <div style={{ flex: 3, display: "flex", flexDirection: "column"}}>
                        <RectContainer width="auto" height="50%">
                                <Blog />
                        </RectContainer>
                        <RectContainer width="auto" height="50%">
                            <News />
                        </RectContainer>
                        <RectContainer width="auto" height="50%">
                            <Updates />
                        </RectContainer>
                    </div>

                    <div style={{ justifyContent: "right", alignContent: "right", display: "flex"}}>
                        <RectContainer width="450px" height='1000px'>
                            <LeaderBoard />
                        </RectContainer>
                    </div>
                </div>

            </div>
    );
}

export default Home;