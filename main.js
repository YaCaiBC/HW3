let myArray = ["2", "3", "4"];

function tothefourth(num) {
    return num*num*num*num;
}
  function math () {
    let x =myArray.map((num)=>num*num);
    document.getElementById("number1").value =x[0];
    document.getElementById("number2").value =x[1];
    document.getElementById("number3").value =x[2];
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("number1").value =myArray[0];
    document.getElementById("number2").value =myArray[1];
    document.getElementById("number3").value =myArray[2];

    document.getElementById("cube").addEventListener("click", function () {
        let x =myArray.map(function(num){return num*num*num});
        document.getElementById("number1").value =x[0];
        document.getElementById("number2").value =x[1];
        document.getElementById("number3").value =x[2];
    });

   document.getElementById('tothefourth').addEventListener("click", result);
    function result () {
        let x =myArray.map((num)=>num*num*num*num);
        document.getElementById("number1").value =x[0];
        document.getElementById("number2").value =x[1];
        document.getElementById("number3").value =x[2];
    };
 
});

