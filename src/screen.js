import React from "react";
import screenFunction from "./functions/screenFunction";
import { connect } from "react-redux";
import mapStateToProps from "./functions/mapStateToProps";

function Screen(props){
    const screenStyle={
        height: 45,
        border: "2px solid blue",
        borderRadius: 5,
        fontFamily: "Lobster, cursive",
        fontSize: 35,
        padding: 5,
        textAlign: "center"      
    };

    return (
        <div style = {screenStyle}>{screenFunction(props)}</div>
    );
}

export default connect(mapStateToProps)(Screen);