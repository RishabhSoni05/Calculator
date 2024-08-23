// let varseven = document.getElementById("seven");
// function printnum(){
//     console.log("Hello");
// }
// printnum();
// varseven.addEventListener("click",() => {
//     console.log("7 got clicked");
// });



// let varplus = document.getElementById("plus");
// varplus.addEventListener("click",() => {
//     console.log("+ got clicked");
// });


// let varplus = document.getElementById("plus");
// varplus.addEventListener("click",(event) => {
//     console.log("+ got clicked", event.target.innerHTML);
// });





//--------- select all buttons
let buttons = document.getElementsByTagName("button");   //gets html collection of all buttons
let buttonsArray = Array.from(buttons);      //convert html collection into array using Array.from();

//--------- add event listner in all buttons
buttonsArray.forEach((button) => {
    button.addEventListener("click", printNum);
});

function printNum(event){
    let button11 = event.target;  // <button> 6 </button>
    let buttonValue = button11.innerText; // 6

    //--- get the screen
    let screen11 = document.getElementById("screen");

    if(buttonValue === "C") {
        screen11.value = "";
        return;
    }
    if(buttonValue === "+-")
    {
        if(screen11.value[0] === "-"){
            screen11.value = screen11.value.slice(1);
        }
        else{
            screen11.value = "-" + screen11.value;
        }
        return;
    }
    if("+-/x".includes(buttonValue))
    {
        if(screen11.value.includes("+") || screen11.value.includes("-") || screen11.value.includes("x") || screen11.value.includes("/"))
        {
            alert("Sign is already present...");
            return;
        }
    }
    if(buttonValue === "=") {
        if(screen11.value.includes("+"))
        {
            let ans = performSum(screen11.value);
            screen11.value = ans;
        }
        else if(screen11.value.includes("-"))
        {
            let ans = performSub(screen11.value);
            screen11.value = ans;
        }
        else if(screen11.value.includes("x"))
        {
            let ans = performMulti(screen11.value);
            screen11.value = ans;
        }
        else if(screen11.value.includes("/"))
        {
            let ans = performDiv(screen11.value);
            if(ans === undefined)
            {
                screen11.value = "";
                return;
            }
            screen11.value = ans;
        }
        else if(screen11.value.includes("%"))
        {
            let ans = performPercent(screen11.value);
            screen11.value = ans;
        }
        return;
    }
    // let oldValue = screen11.value;
    // screen11.value = oldValue + buttonValue;     //we can write it in different form as below ...OR
    screen11.value = screen11.value + buttonValue;
}

function performSum(value){
    let plusIndex = value.indexOf("+");
    let num1 = value.slice(0,plusIndex);
    let num2 = value.slice(plusIndex + 1);
    // console.log(num1,num2);
    let sum = Number(num1) + Number(num2);
    return sum;
    // console.log(sum);
}
function performSub(value){
    let minusIndex = value.indexOf("-");
    let num1 = value.slice(0,minusIndex);
    let num2 = value.slice(minusIndex + 1);
    let sum = Number(num1) - Number(num2);
    return sum;
}
function performMulti(value){
    let multiIndex = value.indexOf("x");
    let num1 = value.slice(0,multiIndex);
    let num2 = value.slice(multiIndex + 1);
    let sum = Number(num1) * Number(num2);
    return sum;
}
function performDiv(value){
    let divIndex = value.indexOf("/");
    let num1 = value.slice(0,divIndex);
    let num2 = value.slice(divIndex + 1);
    if(Number(num2) === 0)
    {
        alert("Number is not Divisible....")
        return;
    }
    let sum = Number(num1) / Number(num2);
    return sum;
}
function performPercent(value){
    let perIndex = value.indexOf("%");
    let num1 = value.slice(0,perIndex);
    let sum = Number(num1) / 100;
    return sum;
}
document.addEventListener("keyup", (e) => {
    console.log(e);
});