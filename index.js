
const container=document.getElementById("container");
const button=document.getElementById("button");
const inputNumbers= document.getElementById("inputnumbers");
const firstNumber=document.getElementById("number1");
const secondNumber=document.getElementById("number2");
const thirdNumber=document.getElementById("number3");


button.addEventListener("click",function () {
    if(firstNumber.value === ""){
        alert("please write a number")
    }else{
        let span=document.createElement("p");
        inputNumbers.appendChild(span);
        let theSum=Number(firstNumber.value) + Number(secondNumber.value) +Number(thirdNumber.value);
        span.innerHTML =`the sum of this three numbers is ${theSum} =${firstNumber.value} +${secondNumber.value}+ ${thirdNumber.value}`;
        console.log(span)
        firstNumber.value="";secondNumber.value=""; thirdNumber.value="";

        let untickbtn = document.createElement("span");
        inputNumbers.appendChild(untickbtn);
        untickbtn.innerHTML="\u00d7";

        untickbtn.addEventListener("click",function(){
            span.remove();
            untickbtn.remove();
        })
    }
})
