
function screenFunction(props){
    return props.showNum1 ? props.num1 : props.showNum2 ? props.num2 : props.showTotal ? props.total: 0
}


export default screenFunction;