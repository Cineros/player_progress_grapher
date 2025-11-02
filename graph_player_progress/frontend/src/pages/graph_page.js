import React from "react";
import RectContainer from "../components/RectContainer";
//This page will use flask to publish the graphs made, it should be dynamic for each user so ill have to worry about what data each user has access to.

function Graphs(){
    return(
        <div>
            <div>
                <RectContainer height="15%" width="30%">
                    <h5>These will be links</h5>
                    <h5>To change what you are viewing </h5>
                    <h5>Graph wise</h5>
                    <h5>From DPS/HPS/Damage Overall/Healing Overall/ilvl</h5>

                </RectContainer>
            </div>
            <RectContainer width="auto" height="auto">

            </RectContainer>
        </div>
    )
}

export default Graphs;