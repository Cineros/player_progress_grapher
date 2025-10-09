import React from "react";


function PageContainer( {children }){
    const style = {
        padding: "0 10px",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center"
    };

    return <div style={style}>{children}</div>
}

export default PageContainer;