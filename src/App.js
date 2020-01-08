import React from "react";
import Screen from "./screen";
import Keypad from "./keypad";

function App(){
    return(
        <div>
            <Screen/>
            <Keypad/>
        </div>
    );
}
//Issuing switch to num2, state seems to be getting overwritten after the initial state set. only show state that was returned in the reducer->evaluate
export default App;