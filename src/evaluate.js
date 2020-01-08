
function evaluate(state, action){
    if(state === undefined){
        return {
            total: 0,
            num1: [],
            num2: [],
            showNum1: true,
            showNum2: false,
            showTotal: false,
            operator: "",
            calculated: false, calculated: false
        };
    }
    
    switch(action.type){
        case "addToNum1":       
            return {total: state.total, num1: [...state.num1, action.num1], num2:state.num2, showNum1: true, showNum2: false, showTotal: false, operator: state.operator};
        case "addToNum2":
            return {total: state.total, num2: [...state.num2, action.num2], num1: state.num1, showNum1: false, showNum2: true, showTotal: false, operator: state.operator};
        case "+":
            return {total: state.total, num1: state.num1, num2: state.num2, showNum1: false, showNum2: true, showTotal: false, operator: "+", calculated: false};
        case "-":
            return {total: state.total, num1: state.num1, num2: state.num2, showNum1: false, showNum2: true, showTotal: false, operator: "-", calculated: false};
        case "*":
            return {total: state.total, num1: state.num1, num2: state.num2, showNum1: false, showNum2: true, showTotal: false, operator: "*", calculated: false};
        case "/":
            return {total: state.total, num1: state.num1, num2: state.num2, showNum1: false, showNum2: true, showTotal: false, operator: "/", calculated: false};
        case "=": 
            switch(state.operator){
                case "+":
                    return {total: parseInt(state.num1.join()) + parseInt(state.num2.join()), num1: parseInt(state.num1.join()) + parseInt(state.num2.join()), num2: state.num2, showNum1: false, showNum2: false, showTotal: true, operator: state.operator, calculated: true};
                case "-":
                    return {total: parseInt(state.num1.join()) - parseInt(state.num2.join()), num1: parseInt(state.num1.join()) - parseInt(state.num2.join()), num2: state.num2, showNum1: false, showNum2: false, showTotal: true, operator: state.operator, calculated: true};
                case "*":
                    return {total: parseInt(state.num1.join()) * parseInt(state.num2.join()), num1: parseInt(state.num1.join()) * parseInt(state.num2.join()), num2: state.num2, showNum1: false, showNum2: false, showTotal: true, operator: state.operator, calculated: true};
                case "/":
                    return {total: parseInt(state.num1.join()) / parseInt(state.num2.join()), num1: parseInt(state.num1.join()) / parseInt(state.num2.join()), num2: state.num2, showNum1: false, showNum2: false, showTotal: true, operator: state.operator, calculated: true};
            }
        case "reset":
            return {total: 0, num1: [], num2: [], showNum1: true, showNum2: false, showTotal: false, operator: "", calculated: false};
        default:  
            return state;
    }
}

export default evaluate;