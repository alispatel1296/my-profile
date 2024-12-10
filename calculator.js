
function printNumber(number) { 
    document.getElementById("textarea").value +=number;
}
function answer(){
   const exp = document.getElementById("textarea").value;
   document.getElementById("textarea").value =eval(exp);
}
