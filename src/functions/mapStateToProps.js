
function mapStateToProps(state){
    return({
        total: state.total,
        num1: state.num1,
        num2: state.num2,
        showNum1: state.showNum1,
        showNum2: state.showNum2,
        showTotal: state.showTotal,
        operator: state.operator
    });
}

export default mapStateToProps;