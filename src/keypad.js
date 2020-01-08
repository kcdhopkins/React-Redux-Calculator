import React, { Component } from "react";
import keypadFunction from "./functions/keypadFunction";
import { connect } from "react-redux";
import mapStateToProps from "./functions/mapStateToProps";
import mapDispacthToProps from "./functions/mapDispatchToProps";

class Keypad extends Component{

    constructor(props){
        super(props);

        this.addNumber = this.addNumber.bind(this);
    }

    addNumber(e){
        const num = e.currentTarget.value;

        if(this.props.showNum1){
            this.props.addToNum1(num);
        } else {
            this.props.addToNum2(num);
        }
    }

    componentDidMount(){
        for(let i = 1; i <= 9; i++){
            document.getElementById(`button-${i}`).addEventListener('click', this.addNumber);
        }
    }

    render(){
        const resetButtonStyle = {
            padding: 20,
            margin: 4,
            width: 113,
            borderRadius: 20,
            fontFamily: "Lobster, cursive",
            fontSize: 20,
            border: "2px solid orange",
            backgroundColor: "white"
        };
    
        const buttonStyle = {
            padding: 20,
            margin: 4,
            borderRadius: 20,
            fontFamily: "Lobster, cursive",
            fontSize: 20,
            border: "2px solid yellow",
            backgroundColor: "white"
        };

        const divStyle ={
            padding: 15
        };
    
        return(
            <div style={divStyle}>
                <div>
                   {keypadFunction(7, 9, this.props)} 
                </div>
                <div>
                    {keypadFunction(4, 6, this.props)}
                </div>
                <div>
                    {keypadFunction(1, 3, this.props)}
                </div>
                <div>
                    <button style={resetButtonStyle} onClick={this.props.operatorClick} value="reset">Reset</button>
                    <button id="equals"style={buttonStyle} onClick = {this.props.operatorClick} value="=">=</button>
                    <button style={buttonStyle} onClick = {this.props.operatorClick} value ="/">/</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Keypad);