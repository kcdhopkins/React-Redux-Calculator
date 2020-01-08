import React from "react";

function keypadFunction(start, end, props){
    let row = [];

    const buttonStyle = {
        padding: 20,
        margin: 4,
        borderRadius: "50%",
        fontFamily: "Lobster, cursive",
        fontSize: 19,
        border: "2px solid #4CAF50",
        backgroundColor: "white"
    };

    for(let i = start; i <= end; i++){
        row.push(<button id={`button-${i}`} key={i} style={buttonStyle} value = {i} >{i}</button>);
    }
    switch(start){
        case 7:
            row.push(<button onClick={props.operatorClick} key={"+"} style={buttonStyle}  value = "+">+</button>);
            break;
        case 4:
            row.push(<button onClick ={props.operatorClick} key={"-"} style={buttonStyle} value = "-">-</button>);
            break;
        case 1:
            row.push(<button onClick ={props.operatorClick} key={"*"} style={buttonStyle} value = "*">*</button>);
            break;
        default:
            console.log("There was an error somewhere");
            break;
    }
    return row;
}
export default keypadFunction;

//onclick push current number to arraynum;