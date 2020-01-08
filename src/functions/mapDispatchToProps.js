import React from "react";
import mapStateToProps from "./mapStateToProps";

function mapDispatchToProps(dispatch){

    return({
        addToNum1: i => dispatch({type: "addToNum1", num1: i}),
        addToNum2: i => dispatch({type: "addToNum2", num2: i}),
        operatorClick: e => dispatch({type: e.currentTarget.value})
    });
}

export default mapDispatchToProps;