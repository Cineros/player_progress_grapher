import React from "react";


//This is a generic rectangle component, I wonder if I can use this like normal OOP where I can inherit from this?

function RectContainer({width = "300px", height = "200px", children}) {
    const style = {
        width: width,
        height: height,
        backgroundColor: 'rgb(65, 65, 65)',
        color: 'white',
        borderRadius: "8px",
        padding: "8px",
        boxSizing: "border-box",
        margin: "10px",
        overflowY: "auto",
        borderWidth: "5px",
        borderStyle: "inset",
        borderColor: "#68b2b8ff",
    }
    return <div style={style}>{children}</div>;
}

export default RectContainer;