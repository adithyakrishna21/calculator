//display number in text box
function displayNumber(num){
    result.value+=num;
}

//cldear text
function clearBox(){
    result.value="";
}

//evaluate expression
function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}

//function toremove last item
function removeLastItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}