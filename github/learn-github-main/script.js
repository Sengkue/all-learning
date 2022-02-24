var _ = require('lodash');

// console.log(_);[
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function addlist(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

}

function inputlength(){
     return input.value.length;
}


button.addEventListener("click", function(){
    if( inputlength() >  0){
        addlist();
    }
});

input.addEventListener("keypress", function(event){
    if(inputlength() >  0 && event.keyCode===13 ){
        addlist();
    }

})