"use strict"
let result = document.getElementById("result");
function calculator(newValue){
    result.value += newValue;
}
function deleteMe(){
    result.value = "";
}
function answer(){
    var a = result.value;
    var b = eval(a);
    result.value = b;
    
}